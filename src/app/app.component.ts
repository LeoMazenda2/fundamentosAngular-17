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

  // Diretivas extruturais (*ngFor <-> a mais usada)

  clientes = [
    {
      nome: "Leonildo Mazenda",
      idade: "20",
      genero: "Mascolino",
      Salario: 250000
    },
    {
      nome: "Esperança de Lemamo Mazenda",
      idade: "40",
      genero: "Feminino",
    },
    {
      nome: "Welvio Vivaldo de Lemos Mazenda",
      idade: "17",
      genero: "Mascolino",
      Salario: 650000
    },
    {
      nome: "Yohanna Nayara de Lemos Mazenda",
      idade: "10",
      genero: "Feminino",
      Salario: 250000
    },
    {
      nome: "Pedro Mateus",
      idade: "56",
      genero: "Mascolino",
      Salario: 556001
    }
  ]

}
