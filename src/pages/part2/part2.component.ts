import { Component, inject } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
import { ServService } from './serv.service';

@Component({
  selector: 'app-part2',
  standalone: true,
  imports: [],
  templateUrl: './part2.component.html',
  styleUrl: './part2.component.css'
})
export class Part2Component {

  noList$ =from([1,2,3,4,5,6,7,8,9,10]);
  rolNoList$ =of([101,102,103,104,105,106,107,108,109,110]);
  masterService =inject(ServService);

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
  }


}
