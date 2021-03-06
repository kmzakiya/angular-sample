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
var employee_1 = require("../../Common/employee");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.editEmployee = new core_1.EventEmitter();
    }
    EmployeeComponent.prototype.edit = function (employee) {
        console.log('clicked');
        this.editEmployee.emit(employee);
    };
    return EmployeeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_1.Employee)
], EmployeeComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input('employeeName'),
    __metadata("design:type", String)
], EmployeeComponent.prototype, "employeeDetailName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeComponent.prototype, "editEmployee", void 0);
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employee',
        templateUrl: './employee.component.html',
        styleUrls: ['./employee.component.css']
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map