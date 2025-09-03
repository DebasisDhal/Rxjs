import { Routes } from '@angular/router';
import { BasicComponent } from '../pages/basic/basic.component';
import { Part2Component } from '../pages/part2/part2.component';
import { Part3Component } from '../pages/part3/part3.component';
import { Par4Component } from '../pages/par4/par4.component';

export const routes: Routes = [
    {path:'basic',component:BasicComponent},
    {path:'part2',component:Part2Component},
    {path:'part3',component:Part3Component},
    {path:'part4',component:Par4Component},
];
