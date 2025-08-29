import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  courseDuration$ = new BehaviorSubject<string>("6 months");
}
