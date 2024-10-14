import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { itemOfSideMenu } from 'src/app/core/model/sideMenu';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  status: boolean = false;
  statusLink: boolean = false;
itemOfSideMenu:itemOfSideMenu[] = [
  {icon:'icon-home', name:'Home', routing:'/Home'},
  {icon:'icon-dashboard', name:'Dashboard', routing:'/Dashboard'},
  {icon:'icon-order', name:'Order', routing:'/Order'},
  {icon:'icon-product', name:'Product', routing:'/Product'},
  {icon:'icon-notification', name:'Notification', routing:'/Notification'},
  {icon:'icon-customers', name:'Customers', routing:'/Customers'},
  {icon:'icon-messages', name:'Messages', routing:'/Messages'},
  {icon:'icon-setting', name:'Setting', routing:'/Setting'},
]

constructor(public _Router:Router ,private _AdmainGuard:AuthService){
}

clickEvent() {
  this.status = !this.status;
  //this.statusLink = !this.statusLink;

  if (this.statusLink) {
    setTimeout(() => {
      this.statusLink = false;
    }, 230);
  } else {
    this.statusLink = true;
  }
}
}
