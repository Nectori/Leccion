import { Component } from '@angular/core';
import { Ruta } from 'src/app/rutas.service';
import { RutasService } from 'src/app/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
rutas:Ruta[]=[];
ngOnInit(): void{
  this.rutas = this._rutasService.getRutas();
  console.log(this.rutas);
}

constructor(private _rutasService:RutasService, private router:Router){}

rutasFiltradas: any[] = [];

filtrarRutas(tipo: string) {
  this.rutasFiltradas = this.rutas.filter(ruta => ruta.tipo === tipo);
}

verRuta(idx:number){
  console.log(idx);
  this.router.navigate(['/ruta',idx])
  }
  showModal: boolean = false;

  abrirVentanaEmergente() {
    this.showModal = true;
  }

  cerrarVentanaEmergente() {
    this.showModal = false;
  }
}
