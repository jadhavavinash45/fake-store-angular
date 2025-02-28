import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  serviceDataHolder: string = '';
  /**
   * Subject can act as both observer and observable 
   * Subjects are multicast
   */
  private mySubject = new Subject<string>();
  mySubjectObservable$ = this.mySubject.asObservable();

  setData(data: string) {
    console.log('setter : ', data);
    // this.serviceDataHolder = data;
    this.mySubject.next(data);
  }

  // getData(): string {
  //   return this.serviceDataHolder;
  // }
}
