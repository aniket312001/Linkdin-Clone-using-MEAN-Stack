import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  job_id: any
  arr :any
  formValue!:FormGroup 

  constructor(private fb : FormBuilder,private jobService:JobService,private route:ActivatedRoute, private r1:Router) { }

  ngOnInit(): void {

    this.formValue = this.fb.group({
      position:new FormControl('',[Validators.required]),
      company:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      job_type:new FormControl('',[Validators.required]),
      total_workers:new FormControl(null,[Validators.required]),
      post_by_id:new FormControl(localStorage.getItem("userId")),
     
    })

    this.job_id = this.route.snapshot.paramMap.get('id');
    // console.log(this.job_id)

    if(this.job_id){
      this.jobService.getJobById(this.job_id).subscribe(data=>{
        this.arr=data

        this.formValue = this.fb.group({
          position:new FormControl(this.arr.position,[Validators.required]),
          company:new FormControl(this.arr.company,[Validators.required]),
          address:new FormControl(this.arr.address,[Validators.required]),
          job_type:new FormControl(this.arr.job_type,[Validators.required]),
          total_workers:new FormControl(this.arr.total_workers,[Validators.required]),
      })
    })
    }
  }

  onSubmit(){
    
    if(this.job_id){  // to update value 

      this.jobService.updateJobById(this.job_id,this.formValue.value).subscribe(data=>{
        console.log("Data Updated Successfully ...")
        this.formValue.reset()
        this.r1.navigate(['job/mypost'])
      })
    }
    else{

    
      console.log(this.formValue.value)
      this.jobService.postJob(this.formValue.value).subscribe(data=>{
        console.log("Data Add Successfully...")
        
      })
      this.formValue.reset()

    } 
  }

}
