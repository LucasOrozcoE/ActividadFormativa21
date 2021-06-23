import { Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit  {
 
  @Input()
  usuarioCompartir = '';
  constructor() { }

  ngOnInit() {
    
  }
  

}
