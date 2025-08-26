import { Routes } from '@angular/router';
import { BasicComponent } from '../pages/basic/basic.component';
import { Part2Component } from '../pages/part2/part2.component';

export const routes: Routes = [
    {path:'basic',component:BasicComponent},
    {path:'part2',component:Part2Component}
];
