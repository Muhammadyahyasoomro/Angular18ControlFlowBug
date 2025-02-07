import { Routes } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { ControlflowComponent } from './Components/controlflow/controlflow.component';
import { ForSwitchControlFlowComponent } from './Components/for-switch-control-flow/for-switch-control-flow.component';
import { TemplatedrivenComponent } from './Components/templatedriven/templatedriven.component';

export const routes: Routes = [
    {path:"addemployee", component:AddEmployeeComponent},
    {path:"employeelist", component:EmployeeListComponent},
    {path:"databinding", component:DataBindingComponent},
    {path:"controlflow", component:ControlflowComponent},
    {path:"ForSwitchControlFlow", component:ForSwitchControlFlowComponent},
    {path:"templetedriven", component:TemplatedrivenComponent},
];
