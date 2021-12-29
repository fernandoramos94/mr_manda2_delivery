import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { VerifyPage } from '../verify/verify.page';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  tabId;
  id: any;
  restId: any;
  grandTotal: any;
  orders: any[] = [];
  serviceTax: any;
  status: any;
  time: any;
  total: any;
  uid: any;
  address: any;
  restName: any;
  deliveryAddress: any;
  deliveryCharge: any;
  username: any;
  useremail: any;
  userphone: any;
  usercover: any;
  payment: any;
  myname: any;
  token: any;
  changeStatusOrder: any;
  loaded: boolean;
  orderNotes: any = '';
  userInfo: any;
  rest:any = {};
  addresDeliveryCoord :any;
  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private router: Router,
    public util: UtilService,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private modalCtrl: ModalController) {
    this.loaded = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.tabId = data.id;
      this.id = data.id;
      this.myname = this.util.userInfo && this.util.userInfo.first_name ?
        this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : '';
      this.getOrder();
    });
  }

  getOrder() {

    const param = {
      id: this.id
    };
    this.api.post('orders/getById', param).then((datas: any) => {
      this.loaded = true;
      if (datas && datas.status === 200 && datas.data.length) {
        const data = datas.data[0];
        this.grandTotal = data.grand_total;
        this.orders = JSON.parse(data.orders);
        this.restId = data.restId;
        this.serviceTax = data.serviceTax;
        this.status = data.status;
        this.time = moment(data.time).format('llll');
        this.total = data.total;
        this.payment = data.pay_method;
        this.address = data.str_address;
        this.orderNotes = data.notes;
        if (data && data.address && data.address !== '') {
          const addr = JSON.parse(data.address);
          this.addresDeliveryCoord = addr;
          this.deliveryAddress = addr.house + ' ' + addr.landmark + ' ' + addr.address + ' ' + addr.pincode;
        }
        this.deliveryCharge = data.delivery_charge;
        this.getUserInfo(data.uid);
        this.getRestInfo(this.restId);
        this.restName = data.str_name;
      }
    }, error => {
      this.loaded = true;
      this.util.errorToast('Algo ha ido mal');
    }).catch(error => {
      this.loaded = true;
      this.util.errorToast('Algo ha ido mal');
    });
  }

  getRestInfo(id){
    const param = {
      id: id
    };
    this.api.post('stores/getByUid', param).then((data) => {
      this.rest = data.data[0];
    }, error => {
      this.util.errorToast('Algo ha ido mal');
    }).catch((error) => {
      this.util.errorToast('Algo ha ido mal');
    });
  }

  getUserInfo(uid) {
    const param = {
      id: uid
    };

    this.api.post('users/getById', param).then((data) => {
      if (data && data.status === 200 && data.data.length) {
        const info = data.data[0];
        this.userInfo = info;
        this.username = info.first_name + ' ' + info.last_name;
        this.useremail = info.email;
        this.userphone = info.mobile;
        this.usercover = info.cover;
        this.token = info.fcm_token;
      }
    }, error => {
      this.util.errorToast('Algo ha ido mal');
    }).catch((error) => {
      this.util.errorToast('Algo ha ido mal');
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: VerifyPage,
      componentProps: { code: this.userInfo.country_code, phone: this.userInfo.mobile }
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.role === 'ok') { // ok
        const value = 'entregada';
        const param = {
          id: this.id,
          status: value,
        };
        this.util.show('Por favor espera');        
        this.api.post('orders/editList', param).then((order) => {
          if (order && order.status === 200) {
            const driverParam = {
              id: localStorage.getItem('uid'),
              current: 'active'
            };
            this.api.post('drivers/edit_profile', driverParam).then((driver) => {
              if (driver && driver.status === 200) {
                this.util.hide();
                const msg = 'Orden ' + value + ' por ' + this.restName;
                this.api.sendNotification(msg, 'Orden ' + value, this.token);
                Swal.fire({
                  title: 'Genial!',
                  text: 'El estado de la orden ha cambiado a ' + value,
                  icon: 'success',
                  timer: 2000,
                  backdrop: false,
                  background: 'white'
                });
                this.util.publishOrder();
                this.navCtrl.back();
              } else {
                this.util.hide();
                this.util.errorToast('Algo ha ido mal');
                this.navCtrl.back();
              }
            }, error => {
              console.log(error);
              this.util.hide();
              this.util.errorToast('Algo ha ido mal');
            }).catch(error => {
              console.log(error);
              this.util.hide();
              this.util.errorToast('Algo ha ido mal');
            });
            // edit_profile
          } else {
            this.util.hide();
            this.util.errorToast('Algo ha ido mal');
            this.navCtrl.back();
          }
        }, error => {
          this.util.hide();
          this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
          this.util.hide();
          this.util.errorToast('Algo ha ido mal');
        });
      }
    });

    modal.present();
  }

  changeStatus(value) {
    if (value === 'en camino') {
      const param = {
        id: this.id,
        status: value,
      };
      this.util.show('Por favor espera...');
      this.api.post('orders/editList', param).then((order) => {
        this.util.hide();
        if (order && order.status === 200) {
          const msg = 'Orden ' + value + ' por ' + this.restName;
          this.api.sendNotification(msg, 'Orden ' + value, this.token);
          Swal.fire({
            title: 'Genial',
            text: 'Estado de la orden cambiado a ' + value,
            icon: 'success',
            timer: 2000,
            backdrop: false,
            background: 'white'
          });
          this.util.publishOrder();
          this.navCtrl.back();
        } else {
          this.util.hide();
          this.util.errorToast('Algo ha ido mal');
          this.navCtrl.back();
        }
      }, error => {
        console.log(error);
        this.util.hide();
        this.util.errorToast('Algo ha ido mal');
      }).catch(error => {
        console.log(error);
        this.util.hide();
        this.util.errorToast('Algo ha ido mal');
      });
    } else if (value === 'entregada' && this.util.delivery === '1') {
      console.log('delivery with =>');
      this.openModal();
    } else {
      const param = {
        id: this.id,
        status: value,
      };
      this.util.show('Por favor espera');
      this.api.post('orders/editList', param).then((order) => {
        if (order && order.status === 200) {
          const driverParam = {
            id: localStorage.getItem('uid'),
            current: 'active'
          };
          this.api.post('drivers/edit_profile', driverParam).then((driver) => {
            if (driver && driver.status === 200) {
              this.util.hide();
              const msg = 'Orden ' + value + ' por ' + this.restName;
              this.api.sendNotification(msg, 'Order ' + value, this.token);
              Swal.fire({
                title: 'Genial!',
                text: 'El estado de la orden ha cambiado a ' + value,
                icon: 'success',
                timer: 2000,
                backdrop: false,
                background: 'white'
              });
              this.util.publishOrder();
              this.navCtrl.back();
            } else {
              this.util.hide();
              this.util.errorToast('Algo ha ido mal');
              this.navCtrl.back();
            }
          }, error => {
            this.util.hide();
            this.util.errorToast('Algo ha ido mal');
          }).catch(error => {
            this.util.hide();
            this.util.errorToast('Algo ha ido mal');
          });
          // edit_profile
        } else {
          this.util.hide();
          this.util.errorToast('Algo ha ido mal');
          this.navCtrl.back();
        }
      }, error => {
        this.util.hide();
        this.util.errorToast('Algo ha ido mal');
      }).catch(error => {
        this.util.hide();
        this.util.errorToast('Algo ha ido mal');
      });
    }
  }

  changeOrderStatus() {
    if (this.changeStatusOrder) {
      this.changeStatus(this.changeStatusOrder);
    }
  }

  goToTracker() {

    const destination = `${this.rest.lat},${this.rest.lng}`;

    window.open('https://waze.com/ul?ll='+destination+'&navigate=yes&z=10');
  }

  goToVenue() {
    
    const destination = `${this.addresDeliveryCoord.lat},${this.addresDeliveryCoord.lng}`; //`${localStorage.getItem('lat')},${localStorage.getItem('lng')}`;

    window.open('https://waze.com/ul?ll='+destination+'&navigate=yes&z=10');
  }
  
  call() {
    this.iab.create('tel:' + this.userphone, '_system')
  }
  mail() {
    this.iab.create('mailto:' + this.useremail, '_system')
  }

  back() {
    this.navCtrl.back();
  }





}
