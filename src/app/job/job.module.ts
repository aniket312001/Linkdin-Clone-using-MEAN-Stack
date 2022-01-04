import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { MyJobComponent } from './my-job/my-job.component';


@NgModule({
  declarations: [
    JobComponent,
    JobDetailComponent,
    CreateComponent,
    MyJobComponent,
   
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class JobModule { }
