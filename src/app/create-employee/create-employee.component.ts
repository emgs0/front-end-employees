import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();    
  }
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/empleados']);
    swal.fire('Nuevo Empleado',`Empleado ${this.employee.firstName} creado con exito`,'success');
  }
}
