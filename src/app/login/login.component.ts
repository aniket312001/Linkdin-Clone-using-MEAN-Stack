import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue !: FormGroup
  myData : any

  constructor(private fb:FormBuilder,public userService:UserService,private route:Router) { }

  ngOnInit(): void {

    this.formValue = this.fb.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    })

  }
  onSubmit(){
    console.log(this.formValue.value)
    this.userService.getValidLoginUser(this.formValue.value).subscribe(data=>{
      this.myData = data[0]
      if(this.myData){
        this.userService.VALID_USER = true
        localStorage.setItem("userId",this.myData._id)
        this.route.navigate(['/job'])
      }
      
    })


    this.formValue.reset()
  }


}
