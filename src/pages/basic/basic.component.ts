import { Component } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {

  cityList:String[] = ['New York', 'London', 'Mumbai', 'Delhi', 'Bangalore'];
  cityList2$ = of(['New York', 'London', 'Mumbai', 'Delhi', 'Bangalore']); // of operator will convert the array into observable and one time emits the entire array
  cityList3$ = from(['New York', 'London', 'Mumbai', 'Delhi', 'Bangalore']);//from operator will convert each element of the array into observable and emits each element one by one
  myInterval$ = interval(1000); // emits the value after every 1 second 
  timer$ = interval(2000); // emits the value after every 1 second only once


  constructor() { 
    const myObs$ = new Observable(value =>{ // pure obserable
      value.next("Hello from Observable");
      value.next("Hello from Observable 2");
    });

    myObs$.subscribe(message=>{
      debugger;
      console.log(message);
    })
    this.cityList2$.subscribe(data=>{
      debugger;
      console.log(data);
    })
    this.cityList3$.subscribe(data=>{
      debugger;
      console.log(data);
    })
    this.timer$.subscribe((res:number)=>{
      console.log("timer Executed");
    })

    this.myInterval$.subscribe((res:number)=>{
      console.log(res);
  })

  }


}
