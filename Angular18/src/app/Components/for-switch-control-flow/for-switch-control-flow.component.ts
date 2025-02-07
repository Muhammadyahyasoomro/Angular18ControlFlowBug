import { Component } from '@angular/core';

@Component({
  selector: 'app-for-switch-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './for-switch-control-flow.component.html',
  styleUrl: './for-switch-control-flow.component.scss'
})
export class ForSwitchControlFlowComponent {

  studentArray:any[]= [
    {
        id: 1,
        name: "Ahmed Ali",
        age: 20,
        gender: "Male",
        grade: "A",
        subjects: ["Math", "Physics", "Computer Science"]
    },
    {
        id: 2,
        name: "Ayesha Khan",
        age: 22,
        gender: "Female",
        grade: "B",
        subjects: ["Biology", "Chemistry", "English"]
    },
    {
        id: 3,
        name: "Bilal Hassan",
        age: 21,
        gender: "Male",
        grade: "A+",
        subjects: ["Mathematics", "Statistics", "Economics"]
    },
    {
        id: 4,
        name: "Fatima Sheikh",
        age: 23,
        gender: "Female",
        grade: "B+",
        subjects: ["History", "Political Science", "Sociology"]
    },
    {
        id: 5,
        name: "Usman Tariq",
        age: 20,
        gender: "Male",
        grade: "A",
        subjects: ["Computer Science", "Artificial Intelligence", "Data Structures"]
    }
];
}
