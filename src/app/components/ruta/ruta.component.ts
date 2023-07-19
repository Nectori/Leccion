import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from 'src/app/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  ruta:any={};

  constructor (private activatedRoute: ActivatedRoute, private _rutaService:RutasService){
    this.activatedRoute.params.subscribe(params =>{
      this.ruta = _rutaService.getRuta(params['id']);
      console.log(this.ruta);
    })
  }
}
