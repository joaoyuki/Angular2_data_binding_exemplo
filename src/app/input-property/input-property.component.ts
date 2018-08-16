import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeDoCurso']
})
export class InputPropertyComponent implements OnInit {

  @Input() nome: string = '';
  nomeDoCurso: string = '';

  constructor() { }

  ngOnInit() {
  }



}
