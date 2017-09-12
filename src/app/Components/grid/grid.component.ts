import { Component } from '@angular/core';
import { Employee } from '../../Common/employee';
import { EmployeeService } from '../../Common/employee.service';

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    providers: [EmployeeService]
})

export class GridComponent {
    private employees: Employee[];
    constructor(private employeeService: EmployeeService) {
        this.getEmployees();
    }
    getEmployees(): void {
        this.employeeService.getEmployees().then((data) => {
            debugger;
            this.employees = data;
        }
        );
    }
    getPageData():void{
        
    }
}