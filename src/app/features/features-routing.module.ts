import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';
import { AdmainGuard, AuthGuard, IamUserGuard } from '../core/hellper/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: "login",component:LoginComponent ,canActivate: [IamUserGuard]},
    { path: 'Home',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'Dashboard',component:DashboardComponent, canActivate: [AdmainGuard] },
    { path: 'Messages',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'Notification',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'Order',component:OrdersComponent, canActivate: [AuthGuard]},
    { path: "Customers",loadChildren: () =>
      import("./customers/Customers.module").then(
      (m: any) => m.CustomersModule
      ), canActivate: [AdmainGuard]},
    { path: "Product",loadChildren: () =>
      import("./products/products.module").then(
      (m: any) => m.ProductsModule
      ), canActivate: [AdmainGuard]},
    { path: 'Setting',component:HomeComponent, canActivate: [AuthGuard]},
    { path: '**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
