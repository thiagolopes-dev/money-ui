import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamentos-lista',
  templateUrl: './lancamentos-lista.component.html',
  styleUrls: ['./lancamentos-lista.component.css']
})
export class LancamentosListaComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Lista de Lançamentos');
  }

}
