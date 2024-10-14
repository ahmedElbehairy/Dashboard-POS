import { ActionReducerMap } from '@ngrx/store';
import ProductReducer, { Product } from './Reducers/product.reducer';
import OrdersReducer, { Orders } from './Reducers/orders.reducer';
import CustomersReducer, { Customers } from './Reducers/customer.reducer';

export interface StoreInterface {
  products: Product[];
  Orders:Orders [];
  Customers:Customers [];
}

export interface CustomAction {
  type: string;
  payload?: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  Orders: OrdersReducer,
  products: ProductReducer,
  Customers: CustomersReducer,
};

