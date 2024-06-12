let temperature = 5;
if (temperature < 0) {
  console.log("its freezing");
} else if (temperature >= 0 && temperature <= 15) console.log("it cold");
else if (temperature >= 16 && temperature <= 25) console.log("its mild");
else if (temperature > 25) console.log("its warm");

let temp = 25;
let condition;

switch (true) {
  case temp < 0:
    condition = "its freezing";
    break;
  case temp >= 0 && temp <= 15:
    condition = "its cold";
    break;
  case temp >= 16 && temp <= 25:
    condition = "its mild";
    break;
  case temp > 25:
    condition = "its warm";

    break;
}

console.log("temperature:" + " " + condition);

//let X=90
//if (X%2){
// console.log("its divisible by 3")
//}else if (X%3)
//console.log("divisible by 2");
//else if(X%2 && X%3)
//console.log("its not divisible by either")
//else if (!X%2 &&!X%3)
//console.log("divsible by both")

function devisibleBy(num) {
  let devisible = "";
  switch (true) {
    case num % 2 == 0 && num % 3 == 0:
      devisible = "Divible by 2 and 3";
      break;
    case num % 2 == 0:
      devisible = "Divible by 2";
      break;
    case num % 3 == 0:
      devisible = "Divible by 3";
      break;
    default:
      devisible = "Number is devisible by none";
  }

  console.log(devisible);
}

devisibleBy(8);

for (let i = 1; i <= 10; i++) console.log(i);

for (let i = 2; i <= 20; i++) if (i % 3 !== 0) console.log(i);

var sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 = sum1 + i;
}
console.log(sum1);

const numbers = [1, 2, 3, 4, 5];

for (i = 0; i < numbers.length; i++) console.log(numbers[i]);

var numbers1 = [3, 7, 2, 5, 10, 6];
var biggest = 0;

for (i = 0; i < numbers1.length; i++) {
  if (biggest < numbers1[i]) {
    biggest = numbers1[i];
  }
}
console.log(biggest);
