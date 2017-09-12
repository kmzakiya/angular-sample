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
var forms_1 = require("@angular/forms");
var EditComponent = (function () {
    function EditComponent() {
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'company': '',
            'jobTitle': ''
        };
        this.validationMessages = {
            'firstName': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 4 characters long.',
                'maxlength': 'First Name cannot be more than 24 characters long.',
                'forbiddenName': 'Someone named "Bob" cannot be a hero.'
            },
            'lastName': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 4 characters long.',
                'maxlength': 'Last Name cannot be more than 24 characters long.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email is not valid'
            },
            'company': {
                'required': 'company is required.'
            },
            'jobTitle': {
                'required': 'Job Title is required.'
            }
        };
    }
    EditComponent.prototype.ngAfterViewChecked = function () {
        debugger;
        this.formChanged();
    };
    EditComponent.prototype.formChanged = function () {
        var _this = this;
        debugger;
        if (this.currentForm === this.employeeForm) {
            return;
        }
        this.employeeForm = this.currentForm;
        if (this.employeeForm) {
            this.employeeForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    EditComponent.prototype.onValueChanged = function (data) {
        debugger;
        if (!this.employeeForm) {
            return;
        }
        var form = this.employeeForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return EditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_1.Employee)
], EditComponent.prototype, "employee", void 0);
__decorate([
    core_1.ViewChild('employeeForm'),
    __metadata("design:type", forms_1.NgForm)
], EditComponent.prototype, "currentForm", void 0);
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        templateUrl: './edit.component.html',
        styleUrls: ['./edit.component.css']
    })
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map