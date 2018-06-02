import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeService, private tostr: ToastrService )// we have injected employee service class to its parent component 'EmployeesComponent' so it can be accessible in employee and employee-list components . Refer shared/employee.service.ts
   { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm){
    this.employeeService.insertEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    this.tostr.success("Submitted Successfully","Employee Register")
  }

  resetForm(employeeForm?: NgForm){ // '?' is for optional. eg if form is empty, no need to trigger resetForm()
    if(employeeForm!=null)
      employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key : null,
      name : '',
      position : '',
      office : '',
      salary : 0
      
    }
  }
}
