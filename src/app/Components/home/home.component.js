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
var employee_service_1 = require("../../Common/employee.service");
var HomeComponent = (function () {
    function HomeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    ;
    HomeComponent.prototype.onEditEmployee = function ($event) {
        this.employee = $event;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        debugger;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        debugger;
    };
    HomeComponent.prototype.ngOnChanges = function () {
        debugger;
    };
    HomeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().then(function (data) {
            debugger;
            _this.employees = data;
            _this.employeeService.getEmployee(1).then(function (employee) { return _this.employee = employee; });
            //this.employee=this.employees[0];
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map