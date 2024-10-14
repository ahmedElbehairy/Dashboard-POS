import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private FS: AngularFirestore) {}
  getProfit(id:string , type:string) {
    return this.FS.collection(type).doc(id).valueChanges();
  }
}