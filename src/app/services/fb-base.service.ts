import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Condition} from '../shared/models/condition.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore)  { }

  async add(collectionName: string, data: Condition, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  // tslint:disable-next-line:typedef
  weakAdd(collectionName: string, data: Condition) {
    return this.afs.collection(collectionName).add(data);
  }

  // tslint:disable-next-line:typedef
  get(collectionName: string): Observable<Condition[]> {
    return this.afs.collection(collectionName).valueChanges() as Observable<Condition[]>;
  }
  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }
  // tslint:disable-next-line:typedef
  update(collectionName: string, id: string, data: any) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }
  // tslint:disable-next-line:typedef
  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}
