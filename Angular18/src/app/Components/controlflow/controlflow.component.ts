import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.scss'
})
export class ControlflowComponent {
  constructor(private router:Router){}
  IsCircle:boolean=false;
  btnText:string='Draw'
  Draw(){
    
    this.IsCircle=!this.IsCircle;
    if(this.IsCircle){
      this.btnText='Draw Square'
    }
    else{
      this.btnText='Draw circle'
    }
  }

  NavigateFlow(){
    this.router.navigateByUrl('ForSwitchControlFlow')
  }
 

  
  
}
