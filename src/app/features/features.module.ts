import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/Customers.module';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSelectModule } from '@angular/material/select';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    NgApexchartsModule,
    MatCardModule,
    NgxChartsModule,
    MatMenuModule,
    SharedModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ProductsModule,
    FeaturesRoutingModule,
    MatIconModule,
]
})
export class FeaturesModule { }
