import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { ITransaction } from './transaction'

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}

  processTransaction(transaction: ITransaction): Observable<string> {
    // ‘5a6352c6810c19729de860ea’ is a random string that represents a transaction ID
    return new BehaviorSubject<string>('5a6352c6810c19729de860ea').asObservable()
  }
}
