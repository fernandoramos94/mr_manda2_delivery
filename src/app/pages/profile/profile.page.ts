/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  seg_id = 1;
  name: any;
  photo: any = 'assets/imgs/user.png';
  email: any;
  id: any;
  userDetail;
  constructor(
    private router: Router,
    public api: ApiService,
    private navCtrl: NavController,
    public util: UtilService) {

  }

  ngOnInit() {
  }


  changeSegment(val) {
    this.seg_id = val;
  }

  goToselectRestaurants() {
    this.router.navigate(['/choose-restaurant']);
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  getProfile() {
    return this.util.userInfo && this.util.userInfo.cover ? this.api.mediaURL + this.util.userInfo.cover : 'assets/user.png';
  }

  getName() {
    return this.util.userInfo && this.util.userInfo.first_name ?
      this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : '';
  }
  getEmail() {
    return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : '';
  }

  orders() {
    this.navCtrl.navigateRoot(['']);
  }

  reset() {
    this.router.navigate(['forgot-password']);
  }

  goToAbout() {
    this.navCtrl.navigateRoot(['tabs/tab3/about']);
  }

  goToContact() {
    this.navCtrl.navigateRoot(['tabs/tab3/contacts']);
  }

  goLangs() {
    this.navCtrl.navigateRoot(['tabs/tab3/languages']);
  }

  goFaqs() {
    this.navCtrl.navigateRoot(['tabs/tab3/faqs']);
  }

  goHelp() {
    this.navCtrl.navigateRoot(['tabs/tab3/help']);
  }

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot(['/login']);
  }

  reviews() {
    this.router.navigate(['reviews']);
  }
  back() {
    this.navCtrl.back();
  }

}
