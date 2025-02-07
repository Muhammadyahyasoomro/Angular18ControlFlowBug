import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-templatedriven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.scss'
})
export class TemplatedrivenComponent {
  student:any={
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    password:'',
    city:'',
    state:'',
    zip:'',
    isAgreed:false

  }

  studentList:any[]=[

  ]
  addStudent(){
    this.studentList.push(this.student);
    console.log(this.studentList);
  }

}
