import { Component, Input, AfterViewInit, OnInit, AfterContentInit, OnChanges } from '@angular/core';
import { Employee } from '../../Common/employee';
import { EmployeeService } from '../../Common/employee.service';
import { ObserverService } from '../../Common/observer.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [EmployeeService]
})
export class DashboardComponent implements AfterViewInit, OnInit, AfterContentInit, OnChanges {
  employees: Employee[];
  constructor(private employeeService: EmployeeService, private observerService: ObserverService) {

  }

  ngAfterViewInit() {
    debugger;
  }
  ngOnInit() {
    this.getEmployees();
  }
  ngAfterContentInit() {
    debugger;
  }
  ngOnChanges() {
    debugger;
  }
  getEmployees(): void {
    this.employeeService.getEmployees().then(
      (data) => {
        this.employees = data;
      }
    );
  }
  notify(employee:Employee) {
    debugger;
    this.observerService.notify("notify", employee.firstName);
  }
}

