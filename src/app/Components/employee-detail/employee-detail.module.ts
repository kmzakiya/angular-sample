import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail.component';
import {TemplateVariableComponent} from './template-variable/template-variable.component';
const employeeDetailRoutes: Routes = [
  { path: 'detail/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(employeeDetailRoutes)
    ],
  declarations: [
    EmployeeDetailComponent,
    TemplateVariableComponent
    ]
})
export class EmployeeDetailModule { }
