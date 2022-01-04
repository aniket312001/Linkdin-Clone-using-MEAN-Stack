import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }


  getAllJob():Observable<any>{
    let url = "http://localhost:3000/api2/"
    return this.http.get<any>(url)
  }

  getJobById(id:any):Observable<any>{
    let url = "http://localhost:3000/api2/"+id
    return this.http.get<any>(url)
  }

  postJob(data:any):Observable<any>{
    let url = "http://localhost:3000/api2/"
    return this.http.post<any>(url,data)
  }


  
  getFilterJob(obj:any):Observable<any>{

    let url = "http://localhost:3000/api2/?"
    // http://localhost:3000/api2/?company=GOOGLE&address=pune&position=an
    if(obj.company){
      url = url+`company=${obj.company}&`
    }

    if(obj.position){
      url = url+`position=${obj.position}&`
    }
    
    if(obj.address){
      url = url+`address=${obj.address}&`
    }

    if(obj.post_by_id){
      url = url+`post_by_id=${obj.post_by_id}&`
    }
    
    return this.http.get<any>(url)
  }


  deleteJobById(id:any):Observable<any>{
    let url = "http://localhost:3000/api2/"+id
    return this.http.delete<any>(url).pipe(
      catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }

  updateJobById(id:any,data:any):Observable<any>{
    let url = "http://localhost:3000/api2/"+id
    return this.http.put<any>(url,data).pipe(
      catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }
  

}
