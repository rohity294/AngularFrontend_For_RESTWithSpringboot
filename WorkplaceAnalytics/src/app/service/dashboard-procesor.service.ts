import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User'

@Injectable({
  providedIn: 'root'
})
export class DashboardProcesorService {

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/users");
  }

  public getUserById(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/users" + "/" + id);
  }

  public addEmployee(userAdded: any): Observable<any> {
    return this._http.post<any>("localhost:8080/users/addOrUpdateUser",userAdded);
  }

  public deleteUserById(passedEmpIdToDelete: any): Observable<any> {
    return this._http.delete<any>("localhost:8080/users/deleteUser/"+passedEmpIdToDelete);
  }
}

