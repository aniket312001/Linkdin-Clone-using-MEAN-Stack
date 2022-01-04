import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formValue !: FormGroup

  constructor(private fb:FormBuilder,private userService:UserService,private route:Router) { }

  ngOnInit(): void {

    this.formValue = this.fb.group({
      name: new FormControl('',[Validators.required]),
      age: new FormControl(null,Validators.compose([Validators.required])),
      education: new FormControl('',[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    })

  }


  onSubmit(){
    console.log(this.formValue.value)
    this.userService.createUser(this.formValue.value).subscribe(data=>{
      console.log("User created Successfully")
      this.route.navigate(['/login'])
    })
    this.formValue.reset()
  }

}
