import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import  { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,    
    AddEmployeeComponent,
    EmployeeListComponent,
    DataBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  constructor(private router:Router){}
  Navigator(){
    this.router.navigateByUrl('addemployee');
  }
  title = 'Angular18';
}

