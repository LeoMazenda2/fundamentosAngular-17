import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  Salario: number;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  clientes : Pessoa[] = [
    {
      nome: "Leonildo Mazenda",
      idade: 20,
      sexo: "m",
      Salario: 250000
    },
    {
      nome: "Esperança de Lemamo Mazenda",
      idade: 40,
      sexo: "f",
      Salario: 650000
    },
    {
      nome: "Welvio Vivaldo de Lemos Mazenda",
      idade: 17,
      sexo: "m",
      Salario: 650000
    },
    {
      nome: "Yohanna Nayara de Lemos Mazenda",
      idade: 10,
      sexo: "f",
      Salario: 250000
    },
    {
      nome: "Pedro Mateus",
      idade: 56,
      sexo: "m",
      Salario: 556001
    }
  ]

  displayedColumns: string[] = ['nome', 'idade', 'sexo', 'Salario'];
  dataSource !: MatTableDataSource<any>;

  ngOnInit() {
      this.dataSource = new MatTableDataSource(this.clientes);     
  }

}