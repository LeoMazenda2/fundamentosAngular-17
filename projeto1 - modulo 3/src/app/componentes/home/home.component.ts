import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, map, of, tap } from 'rxjs';


export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: string;
}

export interface Pessoas extends Array<Pessoa>{}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = null; 

  frutas: string[] = [];
  
  frutas$ = of('banana', 'manga', 'uva','pera','melancia','abacaxi')

  constructor (){
   this.frutas$.pipe(
      tap(console.log),
      map(fruta => fruta.toUpperCase()),
      tap(console.log),
      filter(fruta => fruta.startsWith('M') || fruta.startsWith('B')),
    ).subscribe( resultado => {
      this.frutas.push(resultado)
    });
  }

  clientes!: Pessoas;
  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource !: MatTableDataSource<any>;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.clientes);    
  }
}