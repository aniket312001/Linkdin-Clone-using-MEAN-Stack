import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';

import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobComponent } from './job.component';
import { MyJobComponent } from './my-job/my-job.component';

const routes: Routes = [
  { path: '', component: JobComponent },
  { path: 'single/:id', component: JobDetailComponent },
  { path: 'create', component: CreateComponent },
  { path: 'mypost', component: MyJobComponent },
  { path: 'update/:id', component: CreateComponent },  // it will use create component of updating 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
