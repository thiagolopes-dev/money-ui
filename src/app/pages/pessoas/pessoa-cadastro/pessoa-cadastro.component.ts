import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  validaEstado(uf: any, form: NgForm) {
    this.spinner.show();
    this.cidadesFiltradas = [];
    console.log(uf);
    if (uf) {
      (async () => {
        await Promise.all(
          this.cidades.map(async (element) => {
            console.log(uf);
            if (uf.value.uf === element.SIGLA || uf.value === element.SIGLA) {
              this.cidadesFiltradas.push({ ...element });
            }
          })
        );
        this.spinner.hide();
      })();
    }
    console.log(this.cidadesFiltradas);
  }

  salvar(form: NgForm) {
    console.log(form);
  }

}
