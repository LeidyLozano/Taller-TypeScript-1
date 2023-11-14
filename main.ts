import {Serie} from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("Series")!;


function mostrarDatosSerie(series: Serie[]):void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.serieId}</td> 
                                <td data-id = ${c.serieId}><a>${c.nombre}</a></td>
                                <td>${c.canal}</td>
                                <td>${c.temporadas}</td>`;
    
        seriesTable.appendChild(trElement);
    });
}

function sacarPromedioSerie(sumaTotal: number, numeroSeries: number): number{

    let result:number=0;

    result = sumaTotal/numeroSeries;

    return result;


}