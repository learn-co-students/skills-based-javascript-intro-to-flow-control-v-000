function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  var teenager = "You are a teenager";

  switch (age) {
    case 13:
      return teenager;
    case 14:
      return teenager;
    case 15:
      return teenager;
    case 16:
      return teenager;
    case 17:
      return teenager;
    case 18:
      return teenager;
    case 19:
      return teenager;
    default:
      return "You have an age";
  }
}

