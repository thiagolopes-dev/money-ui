import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pessoas } from 'src/app/core/models/pessoas.model';
import { GovService } from './../../../core/services/gov.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoas = new Pessoas();
  estados = [];
  cidades = [];
  cidadesFiltradas = [];

  constructor(
    private govService: GovService,
    private spinner: NgxSpinnerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de Pessoa');
    this.carregarEstados();

  }


  carregarEstados() {
    this.govService.getUf().then((obj) => {
      this.estados = obj;
    });
  }

  buscarCidades(value: string) {
    console.log(value);
    this.spinner.show();
    this.govService.getCidades(value)
      .then((obj) => {
        this.cidadesFiltradas = obj;
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        console.log(erro);
      });
  }

}
