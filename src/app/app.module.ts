import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { EmployeeDetailModule } from './Components/employee-detail/employee-detail.module';
import {DashboardModule} from './Components/dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EditComponent } from './Components/edit/edit.component';
//import {EmployeeDetailComponent} from './Components/employee-detail/employee-detail.component';
import { GridComponent } from './Components/grid/grid.component';
import { LimitCharPipe } from './Common/limit-char.pipe';
import { ObserverService } from './Common/observer.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmployeeDetailModule,
    DashboardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    //DashboardComponent,
    EmployeeComponent,
    EditComponent,
    GridComponent,
    LimitCharPipe
  ],
  bootstrap: [AppComponent],
  providers: [ObserverService]
})
export class AppModule { }
