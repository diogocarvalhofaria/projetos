import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String = 'diosgo';
  age : number = 30;
  job = 'programador';
  title = 'curso-angular';
  hobbies = ['correr', 'jogar', 'estudar'];

}
