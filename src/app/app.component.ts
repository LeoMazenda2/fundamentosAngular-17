import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Importe o CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // ✅ Inclua o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';  // deve passar os valores TRUE, FALSE ou VASIO
  constructor() {} 

  // ngIf -> Usando o complemento else, samod para exibir ou ocultar elementos por uma desisão logica 

  // ngSwitch
}
