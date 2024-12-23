import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
      sexo: "m",
      Salario: 250000
    },
    {
      nome: "Esperança de Lemamo Mazenda",
      idade: "40",
      sexo: "f",
    },
    {
      nome: "Welvio Vivaldo de Lemos Mazenda",
      idade: "17",
      sexo: "m",
      Salario: 650000
    },
    {
      nome: "Yohanna Nayara de Lemos Mazenda",
      idade: "10",
      sexo: "f",
      Salario: 250000
    },
    {
      nome: "Pedro Mateus",
      idade: "56",
      sexo: "m",
      Salario: 556001
    }
  ]

}
