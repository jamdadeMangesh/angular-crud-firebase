import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:  [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) // we have injected employee service class to its parent component 'EmployeesComponent' so it can be accessible in employee and employee-list components . Refer shared/employee.service.ts
  
   { }

  ngOnInit() {
  }

}
