import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Component, NgModule, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  Name:string="ali";
  Data=signal(["Hi","hello","bss","agya","sawad"]);


}
