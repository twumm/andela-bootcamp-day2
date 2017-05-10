/*Create a `Car` class that can be used to instantiate various vehicles. It takes in arguments 
 that depict the type, model, and name of the vehicle, provided they are set.*/

function Car(name, model, type){
  if (name === undefined){
    this.name = "General";
  }
  else{
    this.name = name;
    this.model = model;
  }
  if (this.name === 'Porshe' || this.name === "Koenigsegg"){
    this.numOfDoors = 2;
  }
  else {
    this.numOfDoors = 4;
  }
  if (type === 'trailer'){
    this.numOfWheels = 8;
    this.speed = "0 km/h";
  }
  else {
    this.numOfWheels = 4;
  }
}

Car.prototype.drive = function(){
  return "77 km/h";
};