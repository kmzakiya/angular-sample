import { Component, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { Employee } from '../../Common/employee';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements AfterViewChecked {
  @Input() employee: Employee;
  employeeForm: NgForm;
  @ViewChild('employeeForm') currentForm: NgForm;
  
  ngAfterViewChecked() {
    debugger;
    this.formChanged();
  }

  formChanged() {
    debugger;
    if (this.currentForm === this.employeeForm) { return; }
    this.employeeForm = this.currentForm;
    if (this.employeeForm) {
      this.employeeForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    debugger;
    if (!this.employeeForm) { return; }
    const form = this.employeeForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'company':'',
    'jobTitle':''
  };

  validationMessages = {
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



