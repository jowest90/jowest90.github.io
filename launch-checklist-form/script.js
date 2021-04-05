// Write your JavaScript code here!
window.addEventListener("load", function() {
  // console.log("PASS");
  let form = document.querySelector("form");
  let window, container, list, h2, pilotStatus, copilotStatus, fuelStatus, cargoStatus, missionTarget;
  list = document.querySelector('#faultyItems');
  list.style.visibility='hidden';

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse= myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      pickPlanet(listedPlanets);
      //let target = listedPlanets[Math.floor(pickPlanet(result))];
      let target = pickPlanet(listedPlanets);
        addDestinationInfo(document, target.name, target.diameter, target.star, target.distance, target.moons, target.image)
  }).then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  })

  form.addEventListener("submit", function(event) {
   event.preventDefault();
   let testInput = "";
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   let cargoMass = document.querySelector("input[name=cargoMass]").value;
   let err = validateInput(testInput);
   formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
 });

});
