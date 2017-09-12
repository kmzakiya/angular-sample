import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
