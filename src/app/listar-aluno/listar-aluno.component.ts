import { Component, OnInit } from '@angular/core';
import { Aluno} from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  aluno : Aluno = {
    nome: 'Tiago H. Trojahn',
    dataIngresso: '10/10/2010',
    previsaoFormatura: '10/10/2015'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
