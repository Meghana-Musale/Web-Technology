import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  student=[
    {id:1 ,name :'Meghana' , age:20 , course:'AIML'},
    {id:2 ,name:'Shravani' , age:21 ,course :'AIML'},
    
  ]
}
