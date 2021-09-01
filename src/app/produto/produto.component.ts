import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  item : Produto = {
    name: 'sabao',
    price: 10,
    qtd: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
