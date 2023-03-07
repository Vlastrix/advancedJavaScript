// My version

function bmiCalculator (weightKg, heightM) {
    var bmiCalculated = Math.round(weightKg / heightM**2);
    if (bmiCalculated < 18.5) {
        var interpretation = "Your BMI is " + bmiCalculated + ", so you are underweight.";
    }
    if (bmiCalculated >= 18.5 && bmiCalculated <= 24.9) {
        var interpretation = "Your BMI is " + bmiCalculated + ", so you have a normal weight.";
    } 
    if (bmiCalculated > 24.9) {
        var interpretation = "Your BMI is " + bmiCalculated + ", so you are overweight.";
    }
    return interpretation;
}

console.log(bmiCalculator(74, 1.84));

// Version for Udemy

// function bmiCalculator(weight, height) {
//     var bmiCalculated =  Math.round(weight / (height*height));
//     if (bmiCalculated < 18.5) {
//         var interpretation = "Your BMI is " + bmiCalculated + ", so you are underweight.";
//     }
//     if (bmiCalculated >= 18.5 && bmiCalculated <= 24.9) {
//         var interpretation = "Your BMI is " + bmiCalculated + ", so you have a normal weight.";
//     } 
//     if (bmiCalculated > 24.9) {
//         var interpretation = "Your BMI is " + bmiCalculated + ", so you are overweight.";
//     }
//     return interpretation;
// }

// console.log(bmiCalculator(74, 1.84))