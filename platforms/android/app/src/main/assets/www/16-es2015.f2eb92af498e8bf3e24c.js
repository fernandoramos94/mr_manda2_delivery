(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{k578:function(t,n,e){"use strict";e.r(n),e.d(n,"EditProfilePageModule",function(){return _});var i=e("ofXK"),o=e("3Pt+"),a=e("TEn/"),c=e("tyNb"),l=e("mrSG"),r=e("H+bZ"),s=e("2Rin"),d=e("a/9d"),b=e("fXoL");function g(t,n){if(1&t){const t=b.Pb();b.Ob(0,"ion-button",1),b.Wb("click",function(){b.lc(t);const n=b.Yb();return n.edit_flag=!n.edit_flag}),b.Mb(1,"ion-icon",18),b.Nb()}}function h(t,n){if(1&t){const t=b.Pb();b.Ob(0,"ion-button",1),b.Wb("click",function(){return b.lc(t),b.Yb().update()}),b.Mb(1,"ion-icon",19),b.Nb()}}const u=function(t){return{"background-image":t}},p=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o){this.util=t,this.api=n,this.actionSheetController=e,this.camera=i,this.navCtrl=o,this.cover="",this.edit_flag=!0,console.log(localStorage.getItem("uid")),this.getProfile()}ngOnInit(){}getProfile(){const t={id:localStorage.getItem("uid")};this.util.show(),this.api.post("drivers/getById",t).then(t=>{if(this.util.hide(),console.log("user info=>",t),t&&200===t.status&&t.data&&t.data.length){const n=t.data[0];this.util.userInfo=n,this.fname=n.first_name,this.lname=n.last_name,this.mobile=n.mobile,this.gender=n.gender,this.cover=n.cover,this.email=n.email,this.current="active"===n.current}},t=>{console.log(t),this.util.hide()})}updateProfile(){return Object(l.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:this.util.translate("Choose from"),buttons:[{text:"Camera",icon:"camera",handler:()=>{console.log("camera clicked"),this.upload("camera")}},{text:this.util.translate("Gallery"),icon:"images",handler:()=>{console.log("gallery clicked"),this.upload("gallery")}},{text:this.util.translate("Cancel"),icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield t.present()})}update(){if(!this.fname||""===this.fname||!this.lname||""===this.lname||!this.mobile||""===this.mobile)return this.util.errorToast("Todos los campos son requeridos"),!1;const t={first_name:this.fname,last_name:this.lname,email:this.email,gender:this.gender,cover:this.cover,mobile:this.mobile,id:localStorage.getItem("uid"),current:!0===this.current?"active":"busy"};this.util.show("Actualizando..."),this.api.post("drivers/edit_profile",t).then(t=>{this.util.hide(),console.log(t),this.getProfile()},t=>{this.util.hide(),console.log(t)})}back(){this.navCtrl.back()}upload(t){try{this.camera.getPicture({quality:100,targetHeight:800,targetWidth:800,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,sourceType:"camera"===t?this.camera.PictureSourceType.CAMERA:this.camera.PictureSourceType.PHOTOLIBRARY}).then(t=>{console.log("url->",t),this.util.show("Cargando...");const n={img:t,type:"jpg"};console.log("parma==>",n),this.api.nativePost("users/upload_file",n).then(t=>{this.util.hide(),console.log("data",JSON.parse(t.data));const n=JSON.parse(t.data);this.cover=n.data,console.log("cover image",this.cover);const e={cover:this.cover,id:localStorage.getItem("uid")};this.util.show(this.util.translate("Updating...")),this.api.post("users/edit_profile",e).then(t=>{this.util.hide(),console.log(t),this.getProfile()},t=>{this.util.hide(),console.log(t)})},t=>{console.log(t),this.util.hide(),this.util.errorToast("Algo ha ido mal")}).catch(t=>{console.log(t),this.util.hide(),this.util.errorToast("Algo ha ido mal")})})}catch(n){console.log("error",n),this.util.errorToast("Algo ha ido mal")}}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(s.a),b.Lb(r.a),b.Lb(a.a),b.Lb(d.a),b.Lb(a.V))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-edit-profile"]],decls:47,vars:19,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"t"],["slot","end"],[3,"click",4,"ngIf"],[1,"main_content_div"],[1,"main_div"],[1,"info_div"],[1,"user_img",3,"ngStyle","click"],[1,"name"],[1,"image_div"],["name","person-outline"],[1,"content_div"],["type","text",3,"disabled","placeholder","ngModel","ngModelChange"],["name","mail-outline"],["name","call-outline"],["slot","end",3,"disabled","ngModel","ngModelChange"],["slot","icon-only","name","pencil"],["slot","icon-only","name","checkmark"]],template:function(t,n){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-buttons",0),b.Ob(3,"ion-button",1),b.Wb("click",function(){return n.back()}),b.Mb(4,"ion-icon",2),b.Nb(),b.Nb(),b.Ob(5,"ion-title",3),b.qc(6," Perfil "),b.Nb(),b.Ob(7,"ion-buttons",4),b.pc(8,g,2,0,"ion-button",5),b.pc(9,h,2,0,"ion-button",5),b.Nb(),b.Nb(),b.Nb(),b.Ob(10,"ion-content"),b.Ob(11,"div",6),b.Ob(12,"div",7),b.Ob(13,"div",8),b.Ob(14,"div",9),b.Wb("click",function(){return n.updateProfile()}),b.Nb(),b.Ob(15,"div",10),b.Ob(16,"div",11),b.Mb(17,"ion-icon",12),b.Nb(),b.Ob(18,"div",13),b.Ob(19,"span"),b.qc(20,"Nombre \xa0- "),b.Nb(),b.Ob(21,"ion-input",14),b.Wb("ngModelChange",function(t){return n.fname=t}),b.Nb(),b.Nb(),b.Nb(),b.Ob(22,"div",10),b.Ob(23,"div",11),b.Mb(24,"ion-icon",12),b.Nb(),b.Ob(25,"div",13),b.Ob(26,"span"),b.qc(27,"Apellido \xa0- "),b.Nb(),b.Ob(28,"ion-input",14),b.Wb("ngModelChange",function(t){return n.lname=t}),b.Nb(),b.Nb(),b.Nb(),b.Ob(29,"div",10),b.Ob(30,"div",11),b.Mb(31,"ion-icon",15),b.Nb(),b.Ob(32,"div",13),b.Ob(33,"span"),b.qc(34,"Correo \xa0- "),b.Nb(),b.Ob(35,"ion-input",14),b.Wb("ngModelChange",function(t){return n.email=t}),b.Nb(),b.Nb(),b.Nb(),b.Ob(36,"div",10),b.Ob(37,"div",11),b.Mb(38,"ion-icon",16),b.Nb(),b.Ob(39,"div",13),b.Ob(40,"span"),b.qc(41,"Tel\xe9fono \xa0- "),b.Nb(),b.Ob(42,"ion-input",14),b.Wb("ngModelChange",function(t){return n.mobile=t}),b.Nb(),b.Nb(),b.Nb(),b.Ob(43,"ion-item"),b.Ob(44,"ion-label"),b.qc(45,"Disponible "),b.Nb(),b.Ob(46,"ion-toggle",17),b.Wb("ngModelChange",function(t){return n.current=t}),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.Ab(8),b.ec("ngIf",n.edit_flag),b.Ab(1),b.ec("ngIf",!n.edit_flag),b.Ab(5),b.ec("ngStyle",b.ic(17,u,"url("+n.api.mediaURL+n.cover+"),url(assets/imgs/user.png)")),b.Ab(7),b.ec("disabled",n.edit_flag)("placeholder","Nombre")("ngModel",n.fname),b.Ab(7),b.ec("disabled",n.edit_flag)("placeholder","Apellido")("ngModel",n.lname),b.Ab(7),b.ec("disabled",!0)("placeholder","Correo")("ngModel",n.email),b.Ab(7),b.ec("disabled",n.edit_flag)("placeholder","Tel\xe9fono")("ngModel",n.mobile),b.Ab(4),b.ec("disabled",n.edit_flag)("ngModel",n.current))},directives:[a.o,a.P,a.i,a.h,a.p,a.N,i.j,a.k,i.k,a.q,a.cb,o.h,o.k,a.r,a.s,a.O,a.c],styles:["ion-button[_ngcontent-%COMP%]   .img_search[_ngcontent-%COMP%]{width:12px;margin-right:10px}.main_content_div[_ngcontent-%COMP%]{padding:20px}.main_content_div[_ngcontent-%COMP%]   .main_div[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:60vh;justify-content:space-between}.main_content_div[_ngcontent-%COMP%]   .user_img[_ngcontent-%COMP%]{height:90px;width:90px;border-radius:50%;border:3px solid var(--ion-color-primary);margin:auto auto 30px;background-position:50%;background-repeat:no-repeat;background-size:cover;min-width:90px;position:relative}.main_content_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 20px -3px rgba(30,98,255,.3);display:flex;flex-direction:row;padding:10px;justify-content:flex-start;position:relative;height:45px;margin-bottom:20px}.main_content_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]{width:20px;position:relative}.main_content_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .icn[_ngcontent-%COMP%]{max-width:15px;position:absolute;top:50%;transform:translateY(-50%)}.main_content_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]{position:relative;display:flex;flex-flow:row;margin-left:15px}.main_content_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#8992aa;padding-top:5px}.main_content_div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:11px;color:#454d62}.main_content_div[_ngcontent-%COMP%]   .btn_div[_ngcontent-%COMP%]{display:block;width:100%;text-align:center}.main_content_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:var(--ion-color-primary);--border-radius:3px;--color:#fff;font-weight:700;font-size:12px;height:40px;width:150px;text-transform:capitalize;--background-activated:rgba(159,201,165,.5);--color-actived:#fff}.main_content_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   .logout_icon[_ngcontent-%COMP%]{width:12px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[c.i.forChild(p)],c.i]}),t})();var f=e("PCNd");let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[i.b,o.e,a.Q,f.a,m]]}),t})()}}]);