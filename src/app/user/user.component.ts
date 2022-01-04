import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allData :any
  name:String=""
  skill:String=""
  location:String=""

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    
    this.userService.getAllUser().subscribe(data=>{
      this.allData = data
    })
  
    console.log(this.name)
  }

  confirm(data:any){
    if(this.name=="" && this.skill=="" && this.location=="")
      return true
    else {

      if((data.name.toLowerCase().includes(this.name.toLowerCase())) && (data.skills.toLowerCase().includes(this.skill.toLowerCase())) && (data.location.toLowerCase().includes(this.location.toLowerCase()))){
        
        return true

      } else {
        return false
      }
    }
  }
}
