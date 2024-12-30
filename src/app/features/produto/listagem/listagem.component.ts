import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { 
    // Injeção de dependência

  }

  //RXJS
  //Javascript assíncrono   -> axios asxios.get() 
  // Angular usa RxJS e o mesmi RJXJS nao usa froimises
  //Angular usa Observables (é um canal de comunicação entre o componente e o serviço -> é um tunel de comunicação)
  ngOnInit(): void {
    console.log('NgnonInit component listagem...');
    this.produtoService.getCidadePeloCep().subscribe(resposta => {
      console.log(resposta);
    }
    );
  }

}
