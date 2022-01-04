import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.component.html',
  styleUrls: ['./my-job.component.css']
})
export class MyJobComponent implements OnInit {

  allData : any
  constructor(private jobService:JobService,private route:Router) { }


  ngOnInit(): void {

    this.show()

  }

  show(){
    let obj = {
      post_by_id : localStorage.getItem("userId")
    }
    this.jobService.getFilterJob(obj).subscribe(data =>{
      this.allData = data
    })
  }

  onUpdate(id:any){
    this.route.navigate([`job/update/${id}`])
  }

  onDelete(id:any){
    this.jobService.deleteJobById(id).subscribe(data=>{
      console.log("Data Deleted Successfully ... !")
      this.show()
    })
  }
  

}
