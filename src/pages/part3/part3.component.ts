import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-part3',
  standalone: true,
  imports: [],
  templateUrl: './part3.component.html',
  styleUrl: './part3.component.css'
})
export class Part3Component implements OnInit {
  
  studentName$ = new Subject(); //default any type
  rollNo$ = new Subject<number>(); //only number type
  taketill = new Subject<void>();// only emit void type
  courceName$:Subject<string> = new Subject<string>();// only string type
     master= inject(MasterService);
  constructor(){
    setTimeout(()=>{
      this.studentName$.next("Angular 20");
      this.rollNo$.next(101);
    },4000);
    this.master.courseDuration$.next("4 months");
  }

  ngOnInit(){
    this.studentName$.subscribe((res:any)=>{
      console.log("studentName",res);
    })
    this.rollNo$.subscribe((res:any)=>{
      debugger;
    })
    this.master.courseDuration$.subscribe((res:any)=>{
      console.log("courceDuration",res);
    })
  }
  getUser(id:number){
    this.master.getUserById(id).subscribe((res:any)=>{
      console.log("userDetails",res);
    });

  }

}
