function whichSchool(age) {
  if (age < 13) {
    return ("Elementary School");
  }
  if (age >= 13 && age <= 18) {
    return ("Secondary School");
  }
  if (age >= 19) {
    return ("Lighthouse Labs");
  }
}

console.log(whichSchool(12));
