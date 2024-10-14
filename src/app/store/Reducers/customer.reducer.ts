
import { CustomAction } from '../store';
import { SUCCESS, FATLED, LOAD } from '../Actions/customer.action';
import {
  ActionReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';


export interface Customers {
    name:string
    id:string
    walite:number
    address:string
    gender:string
    orders:number 
}

const initialState: Customers[] = [];


const CustomersReducer: ActionReducer<Customers[], CustomAction> = (
  state: Customers[] = initialState,
  action: CustomAction
): Customers [] => {
  switch (action.type) {
    case LOAD:
      return action.payload
    case SUCCESS:
      return action.payload;
    case FATLED:
      return action.payload;
    default:
      return state;
  }
};

let CustomersFs = createFeatureSelector<Customers>('Customers');

export let CustomersSelector = createSelector(CustomersFs, (state) => state);
export default CustomersReducer;
