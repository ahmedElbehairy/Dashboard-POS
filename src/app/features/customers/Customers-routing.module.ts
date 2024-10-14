import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customer-home/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


const routes: Routes = [
    // { path: '', redirectTo: '/Customers', pathMatch: 'full'},
    { path: 'Customers',component:CustomersComponent},
    { path: 'Edit-Customers/:id',component:EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
