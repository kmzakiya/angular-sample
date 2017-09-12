"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.dataUrl = "/app/Common/MOCK_DATA.json";
    }
    EmployeeService.prototype.getEmployees = function () {
        var employees;
        return this.http.get(this.dataUrl)
            .toPromise()
            .then(function (response) {
            return employees = response.json().slice(0, 10);
        })
            .catch(this.handleError);
        //return Promise.resolve(employees);
        //return Promise.resolve(Employees);
    };
    EmployeeService.prototype.handleError = function () {
        debugger;
    };
    // getEmployee(id:any):Employee{
    //    var employee = Employees.find((item)=>{
    //         return item.id==id;
    //     });
    //     return employee;
    // }
    EmployeeService.prototype.getEmployee = function (id) {
        debugger;
        return this.getEmployees()
            .then(function (employees) { return employees.find(function (employee) { return employee.id === id; }); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map