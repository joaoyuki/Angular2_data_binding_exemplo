import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://www.google.com.br/search?q=java&source=lnms&tbm=isch&sa=X&ved=0ahUKEwim17yAp-vcAhXDiJAKHXHODMgQ_AUICigB&biw=1680&bih=944';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nome: string = 'abc';

  nomeCurso: string = 'Angular';

  outroCurso: string = 'Java';

  valorInicial: number = 15;

  pessoa = {
    nome: 'joao',
    idade: 30
  }

  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoCliado(){
    alert('Joao');
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log(<HTMLInputElement>(evento.target).value);
    //this.valorAtual = (<HTMLInputElement>(evento.target).value;
  }

  salvarValor(valor){
    console.log(valor);
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento)  {
    console.log(evento);
    console.log(evento.novoValor);
  }

}
