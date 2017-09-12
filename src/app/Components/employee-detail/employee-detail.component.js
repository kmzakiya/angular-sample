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
var router_1 = require("@angular/router");
var employee_1 = require("../../Common/employee");
var employee_service_1 = require("../../Common/employee.service");
require("rxjs/add/operator/switchMap");
// Component intercation via ViewChild
var core_2 = require("@angular/core");
var template_variable_component_1 = require("././template-variable/template-variable.component");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(employeeService, route) {
        this.employeeService = employeeService;
        this.route = route;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "<h1>Hello</h1>";
        this.route.params
            .switchMap(function (params) { return _this.employeeService.getEmployee(+params['id']); })
            .subscribe(function (employee) { return _this.employee = employee; });
        //this.employee =  this.employeeService.getEmployee(this.route.params["id"]);
    };
    EmployeeDetailComponent.prototype.number = function () {
        return 0;
    };
    EmployeeDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.number = function () { return _this.templateVariableComponent.number; }; }, 10);
    };
    EmployeeDetailComponent.prototype.increment = function () {
        this.templateVariableComponent.increment();
    };
    EmployeeDetailComponent.prototype.decrement = function () {
        this.templateVariableComponent.decrement();
    };
    return EmployeeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_1.Employee)
], EmployeeDetailComponent.prototype, "employee", void 0);
__decorate([
    core_2.ViewChild(template_variable_component_1.TemplateVariableComponent),
    __metadata("design:type", template_variable_component_1.TemplateVariableComponent)
], EmployeeDetailComponent.prototype, "templateVariableComponent", void 0);
EmployeeDetailComponent = __decorate([
    core_1.Component({
        selector: 'employee-detail',
        templateUrl: './employee-detail.component.html',
        styleUrls: ['./employee-detail.component.css'],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map