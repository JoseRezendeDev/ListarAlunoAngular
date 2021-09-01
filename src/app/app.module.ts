import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ListarAlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
