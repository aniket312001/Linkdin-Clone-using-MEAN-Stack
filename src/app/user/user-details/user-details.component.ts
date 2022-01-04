import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  u_id:any
  myData:any

  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {

    this.u_id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.u_id).subscribe(data=>{ 
      this.myData = data
    })
    
  }

}
