import { Component } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/core/service/products.service';
import { loadProductAction } from 'src/app/store/Actions/product.action';
import { Product, productsSelector } from 'src/app/store/Reducers/product.reducer';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export class ProductHomeComponent {
  errorMessage!: string;
  titleOfButton: string = '+ Add Product';
  nextId!: number;
  successMessage!: string;
  displayedColumns:string [] = ['id' , 'name' , 'category' ,'price' , 'quantity' , 'rate' ,'ingredients' ] 
  Product: Product[] = [];
  constructor(private _product:ProductsService, private _store: Store<StoreInterface> ){}
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this._store.dispatch(new loadProductAction());
    this._store.select(productsSelector).subscribe(
      (res:any) => {
        this.Product = res
        if(this.Product?.length > 0){
          this.nextId = Number(this.Product[this.Product?.length - 1].id) + 1
        } else {
          this.nextId = 1
        }      
      },
      (erro) => {
        this.errorMessage = erro.message;
      }
    );
  }
  ChangeButton(title:string){
    this.titleOfButton = title
  }
  deleteProduct(id:string){
    this._product.deleteProducts(id).then(res => {
        this.successMessage = ` <p class="m-0 d-flex flex-column">
        <span class="text-main font-Bold-s20"> Welcome ! </span> 
        <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
          delete your Product Success !!
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
  deleteManyProduct(ids:string[]){
    console.log(ids);
    ids.map(el => {
      this._product.deleteProducts(el).then(res => {
          this.successMessage = ` <p class="m-0 d-flex flex-column">
          <span class="text-main font-Bold-s20"> Welcome ! </span> 
          <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            delete your Product Success !!
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
    })
  }
}
