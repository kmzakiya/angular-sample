import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Common/employee';
@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  @Input() employee: Employee;
  @Input('employeeName') employeeDetailName: string;
  @Output() editEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  edit(employee: Employee): void {
    console.log('clicked');
    this.editEmployee.emit(employee);
  }

  notify(employee: Employee): void {
    alert(employee.firstName)
  }
}
