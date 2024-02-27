import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  nameInput: string = "";
  @ViewChild('myinput') myinput: ElementRef; 

  updateName(name: string) {
    this.nameInput = name;
  }

  resetName() {
    this.nameInput = "";
    this.myinput.nativeElement.value = "";
  }
}
