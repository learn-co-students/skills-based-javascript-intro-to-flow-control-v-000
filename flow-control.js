var teen = "You are a teenager!";
var notTeen = "You are not a teenager";

function basicTeenager(age) {
  if(age > 12 && age < 20){
    return teen;
  }
  // return "You are not a teenager!";
}

function teenager(age) {
  if(age > 12 && age < 20){
    return teen;
  }
  return notTeen;
}

function ageChecker(age) {
  if(age > 12 && age < 20){
    return teen;
  } else if(age > 20){
    return "You are a grownup";
  } else {
    return "You are a kid";
  }

}

function ternaryTeenager(age) {
  return age > 12 && age <  20 ? teen.slice(0,-1) : notTeen;
}

function switchAge(age) {
  switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return teen.slice(0,-1);
    default:
      return "You have an age";
  }
}
