import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job_id:any
  myData:any
  userData :any
  constructor(private route:ActivatedRoute, private jobService:JobService,private userService:UserService) { }

  ngOnInit(): void {
    this.job_id = this.route.snapshot.paramMap.get('id');

    this.jobService.getJobById(this.job_id).subscribe(data=>{
      this.myData = data
      this.userService.getUserById(data.post_by_id).subscribe(res=>{
        this.userData = res
      })
    })

  }

}
