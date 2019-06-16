function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
    return undefined;
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager!": (age < 13) ? "You are a kid": "You are a grownup";
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager": "You are not a teenager";
}

function switchAge(age) {
  switch (true) {
    case (age >= 13 && age <= 19):
      return "You are a teenager";
        break;
      default:
        return "You have an age";
        break;
  }
}
