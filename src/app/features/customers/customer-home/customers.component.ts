import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerService } from 'src/app/core/service/customer.service';
import { loadCustomerAction } from 'src/app/store/Actions/customer.action';
import { Customers, CustomersSelector } from 'src/app/store/Reducers/customer.reducer';
import { StoreInterface } from 'src/app/store/store';
declare var $: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  Customer:Customers [] = []
  displayedColumns:string [] = ['id' , 'name' , 'orders' ,'phone' , 'walite' , 'gender' ,'address' ] 
  nextId!:number
  titleOfButton: string = '+ Add Customer';
  errorMessage!:string
  successMessage!:string
  constructor(private _customer:CustomerService, private _store: Store<StoreInterface> ){}
  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer(){
    this._store.dispatch(new loadCustomerAction());
    this._store.select(CustomersSelector).subscribe(
      (res:any) => {
        if(res){
          this.Customer = res
          console.log(this.Customer);
          if(this.Customer?.length > 0){
            this.nextId = Number(this.Customer[this.Customer?.length - 1].id) + 1
          } else {
            this.nextId = 1
          }      
        }
      },
      (erro) => {
        this.errorMessage = erro.message;
      }
    );
  } 
  DeleteCustomer(id:string){
    this._customer.deleteCustomer(id).then(res => {
      this.successMessage = ` <p class="m-0 d-flex flex-column">
      <span class="text-main font-Bold-s20"> Welcome ! </span> 
      <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
        delete your Customer Success !!
      </span>
      </p>
    `
    setTimeout(() => {
      this.successMessage = '';
    }, 2000);
    }
  ).catch(
    err => 
      {
       this.errorMessage = `<p class="m-0 d-flex flex-column">
      <span class="text-main font-Bold-s20"> Welcome ! </span> 
      <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
        Sorry we have a little problem
      </span>
      </p>
    `
    setTimeout(() => {
      this.errorMessage = '';
    }, 2000);
  })
  }
  deleteManyCustomer(ids:string[]){

  }
}
