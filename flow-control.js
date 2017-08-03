function basicTeenager(age) {
  if (age < 20 && age > 12)
    return "You are a teenager!"
}

function teenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age < 20 && age > 12) return "You are a teenager!"
  else if (age < 13) return "You are a kid"
  else return "You are a grownup"
}

function ternaryTeenager(age) {
  return age < 20 && age > 12 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (age < 20 && age > 12) {
    case true:
      return "You are a teenager"
    case false:
      return "You have an age"
    default:
      return "What?"
  }
}
