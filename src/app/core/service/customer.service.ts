import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { newCustomer } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private FS: AngularFirestore) { }
  
  deleteCustomer(id:string) {
    return this.FS.collection('Customer').doc(id).delete()
  }
  // updateCustomer(id:string , dataUp:UpProduct) {
  //   return this.FS.collection('Customer').doc(id).update(dataUp)
  // }
  creatNewCoustomer(id:string , data:newCustomer){
    return this.FS.doc(`Customer/${id}`).set({
      data
    })
  }
  getCoustomers(){
    return this.FS.collection(`Customer`).valueChanges()
  }
  getOneCoustomers(id:string){
    return this.FS.collection(`Customer`).doc(id).valueChanges()
  }
}
