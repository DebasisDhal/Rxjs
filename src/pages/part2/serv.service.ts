
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServService {


  constructor(private http:HttpClient) { }

  getUserS(){
   return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(
    tap(userList=>
      console.log("userLists",userList)), // all the data store in userList
   
    map((userList:any[])=>userList.map((user:any)=>{ // map return array of object id, name
      return { id: user.id, name: user.name };
    }))
   );
  };
  getSingleUser(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users/1").pipe( // get single user data of address
      map((userData:any)=> userData.address)
    );
  }
}
