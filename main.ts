import {Serie} from './serie.js';

export const sr = new Serie("La casa de papel", "Netflix", 5 "owo", "https:");

let serieTable: HTMLElement = document.getElementById("serie")!;
let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarDatosSerie(sr);

function mostrarDatosSerie(serie: Serie):void {
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr><td colspan=2><img src="${serie.URLImagen}" height="100"></td></tr>
    <tr><td>Nombres:</td><td>${serie.nombre}</td></tr>
    <tr><td>Canal:</td><td>${serie.canal}</td></tr>
    <tr><td>Temporadas:</td><td>${serie.temporadas}</td></tr>
    <tr><td>Temporadas:</td><td>${serie.descripcion}</td></tr>`
    serieTable.appendChild(tbodySerie);
}

function mostrarDatosSeries(series: Serie[]): void {

    let seriesTbody: HTMLElement = document.createElement("tbody");
    for 
    
}