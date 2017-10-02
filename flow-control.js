/* 
1. Declare a function named basicTeenager.
2. Function accepts parameter named age, whose value as an argument will be number.
3. When call function, if the age is between 13 and 19, return "You are a teenager!"
*/
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

/* 
1. Declare a function named teenager.
2. Function accepts parameter named age, whose value as an argument will be number.
3. When call function, return if the age is between 13 and 19, return "You are a teenager!"
4. Else return "You are not a teenager"
*/
function teenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

/* 
1. Declare a function named ageChecker.
2. Function accepts parameter named age, whose value as an argument will be number.
3. When call function, return if the age is between 13-19 it should return "You are a teenager!". 
If the age is 12 or below, it should return "You are a kid". 
If the age is above 19, it should return "You are a grownup"
*/
function ageChecker(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

/* 
1. Declare a function named ternaryTeenager
2. Function accepts parameter named age, whose value as an argument will be number.
3. When call function, return if the age is between 13 and 19, return "You are a teenager!"
4. Else return "You are not a teenager"
*/
function ternaryTeenager(age){
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

/* 
1. Declare a function named switchAge.
2. Function accepts parameter named age, whose value as an argument will be number.
3. Case statement should switch on age and return "You are a teenager" if the age is 13 to 19, 
and return "You have an age" as the default.
*/
function switchAge(age){
  switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    return "You are a teenager";
  default:
    return "You have an age"
  }
}
