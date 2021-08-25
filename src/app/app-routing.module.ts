import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"empleados", component: EmployeeListComponent},
  {path:'crear-empleado',component:CreateEmployeeComponent},
  {path: 'actualizar-empleado/:id', component:UpdateEmployeeComponent},
  {path: "detalles-empleado/:id",component:EmployeeDetailsComponent},
  {path:"", redirectTo: "empleados", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
