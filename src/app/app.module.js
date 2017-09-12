"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var employee_detail_module_1 = require("./Components/employee-detail/employee-detail.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./Components/home/home.component");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var employee_component_1 = require("./Components/employee/employee.component");
var edit_component_1 = require("./Components/edit/edit.component");
//import {EmployeeDetailComponent} from './Components/employee-detail/employee-detail.component';
var grid_component_1 = require("./Components/grid/grid.component");
var limit_char_pipe_1 = require("./Common/limit-char.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            employee_detail_module_1.EmployeeDetailModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            employee_component_1.EmployeeComponent,
            edit_component_1.EditComponent,
            grid_component_1.GridComponent,
            limit_char_pipe_1.LimitCharPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map