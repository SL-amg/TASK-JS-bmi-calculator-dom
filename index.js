function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
const heightInMeters = (height/100);
BMI = ((weight)/(heightInMeters*heightInMeters));
console.log(BMI);
//** 
/* let a = 18.5;
let b = 24.9;
let c = 25.0
let d = 29.9;
let e = 30.0;
**/
//** remove this to see challange 1 and 2 solution 
/* if (BMI <= a){
  console.log("Underweight");
  alert(BMI);
  alert("Underweight")
}
else if (BMI > a && BMI < b){
  console.log("Healthy Weight");
  alert(BMI);
  alert("Healthy Weight")
}
else if (BMI > c && BMI < d){
  console.log("Overweight");
  alert(BMI);
  alert("Overweight")
}
else{
  console.log("Above Obesity");
  alert(BMI);
  alert("Above Obesityt")
}
**/

if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24){
  alert(`Healthy - ${BMI}`);
}
else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25){
  alert(`Healthy - ${BMI}`);
}
else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26){
  alert(`Healthy - ${BMI}`);
}
else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27){
  alert(`Healthy - ${BMI}`);
}
else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28){
  alert(`Healthy - ${BMI}`);
}
else if (age >= 65 &&  BMI >= 24 && BMI <= 29){
  alert(`Healthy - ${BMI}`);
}
else {
  alert(`Not Healthy - ${BMI}`);
}
}
