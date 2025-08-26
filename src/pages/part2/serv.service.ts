
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServService {


  constructor(private http:HttpClient) { }

  getUserS(){
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
