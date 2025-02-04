import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from './model/manager';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private ht:HttpClient) { }


  public one(mm: Manager)
  {
    let url="http://localhost:8080/Manager/SaveManagerInfo";
    console.log("this is service file record save");
    return this.ht.post(url,mm);
  }


  public two():Observable<Manager[]>
  {
    let url="http://localhost:8080/Manager/fetchall"
    return this.ht.get<Manager[]>(url);
  }

  public three(mid:number)
  {
    let url="http://localhost:8080/Manager/Delete/"+mid;
    return this.ht.delete(url);
  }

  public four( mid: number)
  {

    let url="http://localhost:8080/Manager/GetSingleInfo/"+mid;
    return this.ht.get<Manager>(url);
  }

  public five(mid:number,mn:Manager)
  {
    let url="http://localhost:8080/Manager/update/"+mid;
    return this.ht.put(url,mn);
   
  }

  
}
