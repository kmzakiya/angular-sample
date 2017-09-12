"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TemplateVariableComponent = (function () {
    function TemplateVariableComponent() {
    }
    TemplateVariableComponent.prototype.ngOnInit = function () {
        this.number = 0;
    };
    TemplateVariableComponent.prototype.increment = function () {
        this.number++;
    };
    TemplateVariableComponent.prototype.decrement = function () {
        this.number--;
    };
    return TemplateVariableComponent;
}());
TemplateVariableComponent = __decorate([
    core_1.Component({
        selector: 'template-variable',
        templateUrl: './template-variable.html',
        styleUrls: ['./template-variable.css'],
    })
], TemplateVariableComponent);
exports.TemplateVariableComponent = TemplateVariableComponent;
//# sourceMappingURL=template-variable.component.js.map