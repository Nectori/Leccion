import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas:Ruta[]=[
    {corigen:"Machala",
    cdestino:"Guabo",
    precio:"2.00",
    descripcion:"Machala al Guabo",
    tipo:"Interno"
    },
    {
      corigen: "Balsas",
      cdestino: "Zaruma",
      precio: "2.50",
      descripcion: "Envío rápido y seguro",
      tipo: "Interno"
    },
    {
      corigen: "La Victoria",
      cdestino: "Arenillas",
      precio: "3.00",
      descripcion: "Entrega eficiente y confiable",
      tipo: "Externo"
    },
    {
      corigen: "Piñas",
      cdestino: "Huaquillas",
      precio: "4.00",
      descripcion: "Servicio logístico de calidad",
      tipo: "Interno"
    },
    {
      corigen: "Marcabelí",
      cdestino: "Santa Rosa",
      precio: "1.75",
      descripcion: "Envío seguro y rápido",
      tipo: "Externo"
    },
    {
      corigen: "Huaquillas",
      cdestino: "Chilla",
      precio: "3.25",
      descripcion: "Solución logística integral",
      tipo: "Interno"
    },
    {
      corigen: "El Guabo",
      cdestino: "Pasaje",
      precio: "2.25",
      descripcion: "Transporte confiable y eficiente",
      tipo: "Externo"
    },
    {
      corigen: "Santa Rosa",
      cdestino: "Machala",
      precio: "4.50",
      descripcion: "Entrega rápida y segura",
      tipo: "Interno"
    },
    {
      corigen: "Chilla",
      cdestino: "Marcabelí",
      precio: "3.75",
      descripcion: "Servicio logístico de calidad",
      tipo: "Externo"
    },
    {
      corigen: "Arenillas",
      cdestino: "Piñas",
      precio: "2.00",
      descripcion: "Transporte seguro y confiable",
      tipo: "Interno"
    }

  ];
  
  getRutas()
  {
    return this.rutas;
  }

  getRuta(idx: number): Ruta
  {
  return this.rutas[idx];
  }
  constructor() { }
}

export interface Ruta{
  corigen: string;
cdestino: string;
precio: string;
descripcion: string;
tipo: string;

}