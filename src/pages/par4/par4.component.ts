import { Component, inject } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-par4',
  standalone: true,
  imports: [],
  templateUrl: './par4.component.html',
  styleUrl: './par4.component.css'
})
export class Par4Component {

  master = inject(MasterService);

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

  }

}
