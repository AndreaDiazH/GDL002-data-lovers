window.datalover = {
  
  yearAccident:yearAccident

};

//const INJURIES = window.INJURIES;

function yearAccident(INJURIES){
  let yearTime=[];
  for(let i=0;i<INJURIES.length; i++){
    let accidentYear={
      "Year":INJURIES[i].Year.substring(0,4), 
      "Automovil":(INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants),
      "Motocicleta": (INJURIES[i].Total_Injured_Persons_Motorcyclists == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Motorcyclists),
      "Bicicleta" :  (INJURIES[i].Total_Injured_Persons_Pedalcyclists == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Pedalcyclists),
      "Carretera": (INJURIES[i].Total_Injured_Persons_Highway == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Highway),
      "Camion": (INJURIES[i].Total_Injured_Persons_Bus_Occupants == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Bus_Occupants)
    };
    
    yearTime.push(accidentYear); 
  }
  return yearTime;
}

//esta funcion recorre toda la base de datos, trayendo el año (y quitandole el mes y el día a la fecha para solo mostrar el año con substring()), la cantidad de accidentes de carro (y pidiendole que cambie null por el mensaje de "sin datos" de ser el caso, usando un operador ternario), la cantidad de accidentes en motocicleta ("" "" "") y la cantidad de accidentes en bicicleta ("" "" "") y lo guarda en el arreglo yearTime, generando así un filtrado inicial de la base de datos original.
