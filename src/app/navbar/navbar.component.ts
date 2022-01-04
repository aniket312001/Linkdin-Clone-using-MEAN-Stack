import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem("userId")){
      this.userService.VALID_USER = true
    }

  }



}
