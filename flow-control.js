function basicTeenager(age) {
  return (19 >= age && age >= 13 ? "You are a teenager!" : undefined );
}

function teenager(age) {
  return (basicTeenager(age) === undefined ? "You are not a teenager" : basicTeenager(age));
}

function ageChecker(age) {
    if (basicTeenager(age) !== undefined) {
      return basicTeenager(age);
    } else if ( age > 19) {
      return "You are a grownup";
    } else {
      return "You are a kid";
    }
}

function ternaryTeenager(age) {
    return (19 >= age && age >= 13 ? "You are a teenager" : "You are not a teenager" );
}

function switchAge(age) {
  switch(age) {
      case 13:
          return "You are a teenager";
          break;
      case 14:
          return "You are a teenager";
          break;
      case 15:
          return "You are a teenager";
      case 16:
          return "You are a teenager";
      case 17:
          return "You are a teenager";        
      case 18:
          return "You are a teenager";
      default:
          return "You have an age";
  } 
}
