import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NovoComponent } from './componentes/novo/novo.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


//adicionando meus modulos
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ProdutoComponent } from './features/producto/services/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    SexoPipe,
    ToolbarComponent,
    DashboardComponent,
    NovoComponent,
    SobreComponent,
    HomeComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
