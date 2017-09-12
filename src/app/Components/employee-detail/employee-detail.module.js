"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var employee_detail_component_1 = require("./employee-detail.component");
var template_variable_component_1 = require("./template-variable/template-variable.component");
var employeeDetailRoutes = [
    { path: 'detail/:id', component: employee_detail_component_1.EmployeeDetailComponent }
];
var EmployeeDetailModule = (function () {
    function EmployeeDetailModule() {
    }
    return EmployeeDetailModule;
}());
EmployeeDetailModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(employeeDetailRoutes)
        ],
        declarations: [
            employee_detail_component_1.EmployeeDetailComponent,
            template_variable_component_1.TemplateVariableComponent
        ]
    })
], EmployeeDetailModule);
exports.EmployeeDetailModule = EmployeeDetailModule;
//# sourceMappingURL=employee-detail.module.js.map