function showAnualData(){
  document.getElementById("AnualData").style.display = 'block';
}
document.getElementById("btnAnual").addEventListener('click',showAnualData);

//Esta funcion solo muestra la seccion de datos anuales que esta oculta.

function showCompare(){
  document.getElementById("compare").style.display = 'block';
}
document.getElementById("btnCompare").addEventListener('click',showCompare);

//Esta funcion solo mestra la seccion de Comparativa que esta oculta;

function time(tipo){
  let yearAccident=window.datalover.yearAccident(INJURIES);
  let sumAccident= 0;
  let out= "<table class= 'finalTable'><tr><th>Año</th><th>Cantidad de accidentes</th></tr>";
  yearAccident.forEach((element)=>{out += "<tr><td>" + element.Year + "</td><td>"+ element[tipo] +"</td></tr>";});

  document.getElementById("Results").innerHTML = out + "</table>";
}

document.getElementById("btnMoto").addEventListener('click',()=>{time("Motocicleta");});
document.getElementById("btnBike").addEventListener('click',()=>{time("Bicicleta");});
document.getElementById("btnCar").addEventListener('click',()=>{time("Automovil");});

//Esta funcion dibuja la tabla llenandola con los datos por año de la data.

function compare(Year){
  let yearAccident=window.datalover.yearAccident(INJURIES)[Year];
  /*document.getElementById("lblYear").innerHTML = yearAccident.Year;
  document.getElementById("lblBici").innerHTML= yearAccident.Bicicleta;
  document.getElementById("lblResult").innerHTML= yearAccident[contra];
  document.getElementById("lblTransport").innerHTML = contra;
  document.getElementById("lblDiference").innerHTML = yearAccident[contra] - yearAccident.Bicicleta;*/
  drawChart(yearAccident.Bicicleta,yearAccident.Motocicleta,yearAccident.Automovil,yearAccident.Camion);

}

document.getElementById("yearValue").addEventListener('change',()=>{compare(document.getElementById("yearValue").value);});

//Esta funcion toma el valor del selector (el año), para mandar llamar a la funcion que dibuja la grafica que sustituye al parrafo de texto que se mostraba al usuario.


  function drawChart(numAccidentBike, numAccidentMoto, numAccidentAuto,numAccidentBus) {
      // Define the chart to be drawn.
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Tipo de accidente');
      data.addColumn('number', 'Cantidad de accidentes');
      data.addRows([
        ['Bicicleta',numAccidentBike],
        ['Automovil',numAccidentAuto],
        ['Motocicleta',numAccidentMoto],
        ['Camion', numAccidentBus]
      ]);

       const options = {'title':'Relación de Accidentes',
                     'width':450,
                     'height':450,
                     pieHole: 0.4,
         colors: ['#00ff00', '#f85200', '#ffff00','#0089c8'],
         is3D: true
      };

      // Instantiate and draw the chart.
      const chart = new google.visualization.PieChart(document.getElementById('pieChartAccident'));
      chart.draw(data, options);
    }


function clean(){
  document.getElementById("resultsCompare").innerHTML="";
  document.getElementById("Results").innerHTML="";

}
document.getElementById("Clean").addEventListener('click',clean);

//Esta funcion limpia todos los campos que reciben data a lo largo de la interacción. obedece a los dos botones de "Limpiar datos" de las dos secciones (comparativa y datos anuales.)

function goBack(){
  document.getElementById("AnualData").style.display = 'none';
  document.getElementById("compare").style.display = 'none';
}
document.getElementById("btnback").addEventListener('click',goBack);
document.getElementById("btnback2").addEventListener('click',goBack);

// Esta funcion devuelve a la pantalla inicial de la pagina,obedece a los dos botones de "Volver" de las dos secciones (comparativa y datos anuales.)

//querySelector() hace lo mismo que un getElementById agregando el #+id o .+class
// en sort, se puede usar reverseArray()

/*ejemplo para filter:
 crear elementos dinamicos javascript */
