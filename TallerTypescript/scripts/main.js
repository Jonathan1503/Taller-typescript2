import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById('seasonAVG');
var infoBody = document.getElementById('info');
renderSeriesInTable(series);
creatorEL();
var currents;
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, " </td>\n                           <td ><a id=\"info").concat(serie.name, "\">").concat(serie.name, "</a> </td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    averageSeasons.innerHTML = "Seasons average: ".concat(getTotalSeasons(series));
}
function getTotalSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
        totalSeries += 1;
    });
    return totalSeasons / totalSeries;
}
function ShowDiv(sname) {
    series.forEach(function (serie) {
        if (serie.name == sname) {
            infoBody.innerHTML = "<img style=\"max-height: 300px; max-width: 250px;\" src=".concat(serie.image, " alt=\"img\">\n            <b>").concat(serie.name, "</b>\n            <p>").concat(serie.description, "</p> \n            <p>").concat(serie.website, "</p> ");
        }
    });
}
function creatorEL() {
    series.forEach(function (serie) {
        var idk = document.getElementById("info".concat(serie.name)).addEventListener("click", function () {
            ShowDiv(serie.name);
        });
    });
}
