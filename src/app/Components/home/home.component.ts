import { Component, Input, AfterViewInit, OnInit, AfterContentInit, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from '../../Common/employee';
import { EmployeeService } from '../../Common/employee.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]
})
export class HomeComponent implements AfterViewInit, OnInit, AfterContentInit, OnChanges, OnDestroy {
  employees: Employee[];
  employee: Employee;;
  constructor(private employeeService: EmployeeService) {

  }


  onEditEmployee($event: Employee): void {
    this.employee = $event;
  }
  ngAfterViewInit() {
    debugger;
  }
  ngOnInit() {
    debugger;
    this.getEmployees();

  }
  ngAfterContentInit() {
    debugger;
  }
  ngOnChanges() {
    debugger;
  }
  ngOnDestroy() {
    debugger;
  }
  getEmployees(): void {
    this.employeeService.getEmployees().then(
      (data) => {
        debugger;
        this.employees = data;
        this.employeeService.getEmployee(1).then(employee => this.employee = employee);
        //this.employee=this.employees[0];
      }
    );
  }
}

