import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('seasonAVG')!;
let infoBody: HTMLElement = document.getElementById('info')!;


renderSeriesInTable(series);
creatorEL();
let currents: string;




function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero} </td>
                           <td ><a id="info${serie.name}">${serie.name}</a> </td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

 
  averageSeasons.innerHTML= `Seasons average: ${getTotalSeasons(series)}`;
  
  

 
}

function getTotalSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
        totalSeries +=1;
        });
    return totalSeasons/totalSeries;
  }



function ShowDiv(sname:string): void{
    
    series.forEach((serie) => {
        if (serie.name == sname){
            infoBody.innerHTML=`<img style="max-height: 300px; max-width: 250px;" src=${serie.image} alt="img">
            <b>${serie.name}</b>
            <p>${serie.description}</p> 
            <p>${serie.website}</p> `
        }

        
      });

}

function creatorEL(){

    series.forEach((serie) => {

        let idk: HTMLElement = document.getElementById (`info${serie.name}`)!.addEventListener ("click", function(){
            ShowDiv(serie.name);
        })!;
        
   
    });
}
 




