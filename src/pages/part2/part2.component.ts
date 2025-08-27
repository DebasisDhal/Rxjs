import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { ServService } from './serv.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-part2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './part2.component.html',
  styleUrl: './part2.component.css'
})
export class Part2Component {

  noList$ =from([1,2,3,4,5,6,7,8,9,10]);
  rolNoList$ =of([101,102,103,104,105,106,107,108,109,110]);
  masterService =inject(ServService);
  searchTerm = new FormControl();
  timeInterval$ = interval(1000);

  constructor() { 
    this.noList$.subscribe(x=>{ //one by one value
      console.log("from operator",x);
    })
    this.rolNoList$.subscribe(x=>{//array as a whole
      console.log("of operator",x);
    })
    this.noList$.pipe(filter(x=>x%2==0)).subscribe(x=>{
      console.log("filter operator",x);
    })
    this.rolNoList$.pipe(map((result) => result.filter(x => x%2==0))).subscribe((result)=>{
      console.log("filter operator with map",result);
    })

    this.masterService.getUserS().subscribe((res:any)=>{
      console.log("getUser",res);
      
    })
    this.masterService.getSingleUser().subscribe((res:any)=>{
      console.log("getSingleUser",res);
      
    })

    this.searchTerm.valueChanges.pipe(
      filter(searchText=> searchText.length >=3)).subscribe((res:any)=>{ // whenever type in input box it will give the value in after 3 character
      console.log("searchTerm",res);
      
    });

    this.timeInterval$.pipe(
      take(10) // it will give the value from 0 to 9 after that it will stop
    ).subscribe((res:any)=>{
      console.log("timeInterval",res);
    })
  }



}
