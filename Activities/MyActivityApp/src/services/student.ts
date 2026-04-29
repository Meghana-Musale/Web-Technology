import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students = [
    {id : 1, name : "Meghana"},
    {id : 2, name : "Shravani"}
  ]

  getStudents(){
    return this.students;
  }
}
