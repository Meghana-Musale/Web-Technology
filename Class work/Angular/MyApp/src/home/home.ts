import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
//interpolation
export class Home { 
  fname : string = "Meghana Musale";
  myRoll : Number = 83;
  course : string = "AIML";
  city : string[]= ["Pune", "Mumbai", "Delhi", "Ichalkaranji"];

  ShowButton(){
    this.fname = "Meghana Musale",
    alert("Name updated successfully !!")
  }


}


