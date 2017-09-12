import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../../Common/employee';
import { EmployeeService } from '../../Common/employee.service';
import 'rxjs/add/operator/switchMap';

// Component intercation via ViewChild
import { ViewChild, AfterViewInit } from '@angular/core';
import { TemplateVariableComponent } from '././template-variable/template-variable.component';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css'],
    providers: [EmployeeService]
})

export class EmployeeDetailComponent implements OnInit, AfterViewInit {

    @Input() employee: Employee;
    private title: string;
    constructor(private employeeService: EmployeeService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.title = "<h1>Hello</h1>"
        this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe(employee => this.employee = employee);

        //this.employee =  this.employeeService.getEmployee(this.route.params["id"]);
    }

    // Component intercation via ViewChild
    @ViewChild(TemplateVariableComponent)
    private templateVariableComponent: TemplateVariableComponent;
    number(): number {
        return 0;
    }
    ngAfterViewInit(): void {
        setTimeout(() => this.number = () => this.templateVariableComponent.number, 10);
    }

    increment(): void {
        this.templateVariableComponent.increment();
    }
    decrement(): void {
        this.templateVariableComponent.decrement();
    }
}
