import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor() { }

  public messageSource = new BehaviorSubject<any>('');


  changeInMessage(message: any) {
    this.messageSource.next(message);
  }

}
