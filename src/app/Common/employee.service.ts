import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Employees } from './employee.constant';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
    private dataUrl = "/assets/MOCK_DATA.json"
    constructor(private http: Http) {

    }
    getEmployees(): Promise<Employee[]> {
        var employees: Employee[];
           return this.http.get(this.dataUrl)
                 .toPromise()
                 .then((response) => 
                    employees= response.json().slice(0,10) as Employee[]
                    )
                 .catch(this.handleError);
        //return Promise.resolve(Employees);
    }
    handleError(): void {
        debugger;
    }
    // getEmployee(id: any): Promise<Employee>  {
    //     var employee = Employees.find((item) => {
    //         return item.id == id;
    //     });

    //     return Promise.resolve(employee);

    // }

    getEmployee(id: number): Promise<Employee> {
        debugger;
        return this.getEmployees()
            .then((employees) => employees.find(employee => employee.id === id));
    }
}