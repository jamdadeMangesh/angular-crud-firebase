import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

import { Employee } from '../shared/employee.model';
import { element } from 'protractor';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empolyeeList : Employee[]; 

  constructor( private employeeService: EmployeeService ) // we have injected employee service class to its parent component 'EmployeesComponent' so it can be accessible in employee and employee-list components . Refer shared/employee.service.ts
   { }

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.empolyeeList = []; //intialise employee array
      item.forEach(element => {
        //var y = element.payload.toJSON(); //load firebase json
        var y;
        y["$key"] = element.key;
        this.empolyeeList.push(y as Employee)
      })
    });
    // whenever there is any changes like insert, update, delete in firebase database, item arrow funtion is invoked
  }

}
