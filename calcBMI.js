
/* DESCRIPTION
Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */


// ANSWER //

function bmi(weight, height) {
  let bmiCalc = weight/(height**2)
  switch (true) {
      case bmiCalc <= 18.5:
        return "Underweight";
        break;
      case bmiCalc <= 25.0:
        return "Normal";
        break;
      case bmiCalc <= 30.0:
        return "Overweight";
        break;
      case bmiCalc > 30:
        return "Obese"
        break;
      default:
        break;
  }
}
