import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  courseDuration$ = new BehaviorSubject<string>("6 months");
  private userDetails = new Map<number,Observable<any>>();

  
  constructor(private http:HttpClient) { }

  // getUserById(id:number){
  //   return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  // }

getUserById(id: number): Observable<any> { // caching implementation
  if (!this.userDetails.has(id)) {
    const userDataObs = this.http
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(shareReplay(1));

    this.userDetails.set(id, userDataObs);
  }
  return this.userDetails.get(id)!; // ensure non-null return
}
gertusers(){
   return this.http.get("https://jsonplaceholder.typicode.com/users");
}

getPost(){

    const posts = this.http.get("https://jsonplaceholder.typicode.com/posts");
    return posts;
}
getSearchData(query:string){
  return this.http.get("https://dummyjson.com/products/search?q="+query);
}

}
