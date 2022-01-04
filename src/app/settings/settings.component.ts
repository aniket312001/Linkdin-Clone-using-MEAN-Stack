import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  formValue !: FormGroup
  arr:any

  constructor(private fb:FormBuilder,private userService:UserService,private route:Router) { }


  ngOnInit(): void {

    this.userService.getUserById(localStorage.getItem("userId")).subscribe(data=>{
      this.arr = data
      this.formValue = this.fb.group({
        name: new FormControl(this.arr.name,[Validators.required]),
        age: new FormControl(this.arr.age,Validators.compose([Validators.required])),
        education: new FormControl(this.arr.education,[Validators.required]),
        phone: new FormControl(this.arr.phone,[Validators.required]),
        email: new FormControl(this.arr.email,[Validators.required,Validators.email]),
        password: new FormControl(this.arr.password,[Validators.required]),
      })
  
    })


   
  }
  onSubmit(){

    console.log(this.formValue.value)
    this.userService.updateUser(localStorage.getItem('userId'),this.formValue.value).subscribe(data=>{
      console.log("Data is Update Successfully ..!")
      this.route.navigate(['/job'])
    })

  }


  logout(){
   localStorage.clear() 
   this.route.navigate(['/login'])
   this.userService.VALID_USER = false
  }

  delete(){
    this.userService.deleteUser(localStorage.getItem('userId')).subscribe(data=>{
      console.log("Data deleted Successfully ...")
      localStorage.clear()
      this.route.navigate(['/login'])
      this.userService.VALID_USER = false
    })
    
  }
}
