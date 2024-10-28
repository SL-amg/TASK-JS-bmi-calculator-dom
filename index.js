function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
let BMI = 0;
BMI = ((weight)/((height/100)^2));
console.log(BMI);

let a = 18.5;
let b = 24.9;
let c = 25.0
let d = 29.9;
let e = 30.0;

if (BMI <= a){
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

}
