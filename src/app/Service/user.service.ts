import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  VALID_USER = false
 

  constructor(private http: HttpClient) { }

  getValidLoginUser(data:any):Observable<any>{
    let url = `http://localhost:3000/api/login?email=${data.email}&password=${data.password}`
    console.log(url)
    return this.http.get<any>(url)  // it will return observable
  }

  createUser(data:any):Observable<any>{
    let url = "http://localhost:3000/api"
    return this.http.post<any>(url,data)
  }

  getUserById(id:any):Observable<any>{
    let url = "http://localhost:3000/api/getById/"
    return this.http.get<any>(url+id)
  }


  updateUser(id:any,data:any):Observable<any>{
    let url = "http://localhost:3000/api/"+id
    return this.http.put<any>(url,data).pipe(
      catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }

  deleteUser(id:any,):Observable<any>{
    let url = "http://localhost:3000/api/"+id
    return this.http.delete<any>(url).pipe(
      catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }


  getAllUser():Observable<any>{
    let url = "http://localhost:3000/api/"
    return this.http.get<any>(url)
  }


}
