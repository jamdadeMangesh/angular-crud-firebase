import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import { Employee } from './employee.model';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>; //stores collection of employees we store in firebase
  selectedEmployee: Employee = new Employee(); //stores currrently active employee details
  constructor(private firebase: AngularFireDatabase) { }

  getData(){// get all employess list from firebase
    this.employeeList = this.firebase.list('employees'); //employees is node name. we will  save employee details
    return this.employeeList; //return list of employees
  }

  insertEmployee(employee: Employee){ //parameter is employee of type Employee model class.refer employee.model.ts
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  updateEmployee(employee: Employee){
    this.employeeList.update(employee.$key, //to update employee, we have to pass 2 parameters. 1- employee key and 2- all other details
      {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary
      });
  }

  deleteEmployee($key: string){ // parameter is $key to remove whole entry
    this.employeeList.remove($key);
  }
}
