import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersRoutingModule } from './Customers-routing.module';
import { CustomersComponent } from './customer-home/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { TableComponent } from "../../shared/table/table.component";


@NgModule({
  declarations: [
    CustomersComponent,
    EditCustomerComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    CustomersRoutingModule,
    CommonModule,
    TableComponent
]
})
export class CustomersModule { }
