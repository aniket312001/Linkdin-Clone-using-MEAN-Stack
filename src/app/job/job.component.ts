import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobService } from '../Service/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  allData :any
  formValue !: FormGroup

  position:string = "";
  company : string = "";
  address : string = "";


  constructor(private jobService:JobService, private fb:FormBuilder) { }

  ngOnInit(): void {
  
    this.show()

    this.formValue = this.fb.group({
      position: new FormControl(null),
      address: new FormControl(null),
      company: new FormControl(null),
    })




  }

  show(){
    this.jobService.getAllJob().subscribe(data=>{
      this.allData = data
    })
  }


  onSubmit(){
    console.log(this.formValue.value)
    this.jobService.getFilterJob(this.formValue.value).subscribe(data=>{
      this.allData = data
    })
  }

  confirm(data:any){
    if(this.position == "" && this.address=="" && this.company=="")
      return true
    else {

      


      if((data.position.toLowerCase().includes(this.position.toLowerCase())) && (data.company.toLowerCase().includes(this.company.toLowerCase())) && (data.address.toLowerCase().includes(this.address.toLowerCase()))){
        
        return true

      } else {
        return false
      }
    }
  }

  


}
