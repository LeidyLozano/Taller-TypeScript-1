import {Serie} from './serie.js';
import { series } from './data.js';

let serieTable: HTMLElement = document.getElementById("serie")!;
let seriesTable: HTMLElement = document.getElementById("series")!;


function mostrarDatosSerie(serie: Serie):void {
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr><td>#</td><td>${serie.serieId}</td></tr>
    <tr><td>Nombres:</td><td>${serie.nombre}</td></tr>
    <tr><td>Canal:</td><td>${serie.canal}</td></tr>
    <tr><td>Temporadas:</td><td>${serie.temporadas}</td></tr>`

    serieTable.appendChild(tbodySerie);
}

function mostrarDatosSeries(series: Serie[]): void {

    let numSeries:number=0;
    let numTemporadas:number=0;
    let promedio:number=0;

    series.forEach(serie =>{

        mostrarDatosSerie(serie);
        numSeries++;
        numTemporadas += serie.temporadas;
    });

    promedio = sacarPromedioSerie(numTemporadas, numSeries);

    let averageSerie=document.createElement("tr");
    averageSerie.innerHTML=`Seasons average: ${promedio}`
    seriesTable.appendChild(averageSerie);


}

function sacarPromedioSerie(sumaTotal: number, numeroSeries: number): number{

    let result:number=0;

    result = sumaTotal/numeroSeries;

    return result;


}