// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let targets = document.getElementById("missionTarget");
     targets.innerHTML =`<h2>Mission Destination</h2>
           <ol>
              <li>Name: ${name}</li>
              <li>Diameter: ${diameter}</li>
              <li>Star: ${star}</li>
              <li>Distance from Earth: ${distance}</li>
              <li>Number of Moons: ${moons}</li>
           </ol>
           <img src="${imageUrl}">`
           return targets;
}

function validateInput(testInput) {
  if(testInput === ""){
    return 'Empty';
  }else if(isNaN(testInput)){
    return 'Not a Number';
  }else if(!isNaN(testInput)){
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // let items = document.getElementById('faultyItems');
  if(pilot===""||copilot===""||fuelLevel===""||cargoLevel===""||isNaN(fuelLevel)||isNaN(cargoLevel)){
     return alert("All fields are required!");
  }else{
    let launchStatus = document.getElementById('launchStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let ready = true;
    list.style.visibility = 'visible';

    document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilot + ' ' }is ready for launch`
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilot + ' ' }is ready for launch`

    if (fuelLevel < 10000) {
      ready = false;
      fuelStatus.innerHTML = 'Fuel level too low for launch';
    } else {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
    }

    if (cargoLevel > 10000) {
      ready = false;
      cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
    } else {
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }

    if (ready) {
      launchStatus.style.color = 'rgb(65, 159, 106)';
      launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    } else {
      list.style.visibility = 'visible';
      launchStatus.style.color = 'rgb(199, 37, 78)';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    }
  }
}

async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json().then(
            function(json) {
            return json
            }
        );
    });
    return planetsReturned;
}

function pickPlanet(planets) {
  let target=planets[Math.floor(Math.random() * planets.length)];
  return target;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
