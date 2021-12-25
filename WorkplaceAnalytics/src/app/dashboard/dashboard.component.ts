import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../model/User';
import { DashboardProcesorService } from '../service/dashboard-procesor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardProcessorService: DashboardProcesorService) { }

  users = [];
  passedEmpId;
  fetchedUser:User;
  isUserFetched:boolean = false;

  newEmpId;
  newEmpName;
  newEmpAge;
  newEmpSalary;
  newEmpDepartmentId;

  passedEmpIdToDelete;

  ngOnInit(): void {
  }

  showAllEmployees() {
    this.isUserFetched = false;
    this.users = [];
    this._dashboardProcessorService.getAllUsers().subscribe(
      data => {
        let user;
        data.forEach(element => {
          user = new User();
          user.userId = element.userId;
          user.userName = element.userName;
          user.userAge = element.userAge;
          user.userSalary = element.userSalary;
          user.userDepartmentId = element.userDepartmentId;
          this.users.push(user);
        });
      },
      error => {
        console.log("some error occurred");
      }
    );
  }

  showEmpById() {
    this._dashboardProcessorService.getUserById(this.passedEmpId).subscribe(data => {
      let user = new User();
      user.userId = data.userId;
      user.userName = data.userName;
      user.userAge = data.userAge;
      user.userSalary = data.userSalary;
      user.userDepartmentId = data.userDepartmentId;
      this.fetchedUser = user;
      this.isUserFetched = true;
    });
  }

  addEmployee() {
    let userAdded = {userName: this.newEmpName,userAge: this.newEmpAge,userSalary: this.newEmpSalary,userDepartmentId: this.newEmpDepartmentId};
    this._dashboardProcessorService.addEmployee(userAdded).subscribe(data => {
      console.log(data);
    });
  }

  deleteEmployeeById(){
    this._dashboardProcessorService.deleteUserById(this.passedEmpIdToDelete).subscribe(data => {
      console.log(data);
    });
  }

}
