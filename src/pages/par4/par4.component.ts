import { Component, inject } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, of, Subject, switchMap } from 'rxjs';
import { MasterService } from '../master.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-par4',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './par4.component.html',
  styleUrl: './par4.component.css'
})
export class Par4Component {

  master = inject(MasterService);
  searchcontrol =new FormControl('');
  loginData$ = new Subject<void>();

  constructor(){
  var  stateData$ = of(['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']);
  const $post = of(["pune","mumbai","bangalore","chennai"]);

  forkJoin([$post,stateData$]).subscribe(result=>{
    console.log(result);
  },error=>{
    console.log(error);
  })

  stateData$.subscribe((res:any)=>{
    console.log(res);
  });

  $post.subscribe((Res:any)=>{
    console.log(Res);
  })

  this.master.gertusers().subscribe((res:any)=>{ //Here all are diffierent api call
    console.log(res,"users data");
  });

  this.master.getPost().subscribe((res:any)=>{ //Here all are diffierent api call
    console.log(res ,"posts data");
  });

  forkJoin([this.master.gertusers(),this.master.getPost()]).subscribe(result=>{ //Here both api call in single call
    console.log(result  ,"forkjoin users and posts");
  });
  // this.searDAta();
  // this.searchWithMapData();
  }
  
  // here multiple api call for each character

  // searDAta(){ 
  // this.searchcontrol.valueChanges.subscribe((res:any)=>{
  //   console.log(res);
  //   this.master.getSearchData(res).subscribe((response:any)=>{
  //     console.log(response);
  //   });

  // });
// }

  // here single api call for each character Help of switchmap
// searchWithMapData() {
//   this.searchcontrol.valueChanges.pipe(
//     switchMap((search: string | null) => this.master.getSearchData(search ?? ''))
//   ).subscribe((res: any) => {
//     console.log(res);
//   });
// }

// here  api call for each character Help of concatmap one by one sequentially call
// searchWithMapData() { 
//   this.searchcontrol.valueChanges.pipe(
//     concatMap((search: string | null) => this.master.getSearchData(search ?? ''))
//   ).subscribe((res: any) => {
//     console.log(res);
//   });
// }

onLogin(){
  this.master.gertusers().subscribe((res:any)=>{
    console.log(res,"users data");
  });
}
// onLogin(){
//   this.loginData$.pipe(
//     exhaustMap(() => this.master.gertusers())
//   ).subscribe((res: any) => {
//     console.log(res, "users data");
//   });
//   this.master.gertusers().subscribe((res:any)=>{
//     console.log(res,"users data");
//   });
// }

}


