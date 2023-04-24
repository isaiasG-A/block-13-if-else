const num1 = -5;
const num2 = 0;

//Two numbers should be added
const sum = num1 + num2;

//If the sum is less than -1000 then the sum and the message "is less than -1000" should be printed.
if(sum < -1000) {
  console.log(sum, "s less than -1000");

  // If the sum is a negative number, then the sum and the message "is a negative number" should be printed.
} else if(Math.sign(sum) === -1) {
  console.log(sum, "is a negative number");

  //If the sum is 0, then the sum and the message "is equal to 0" should be printed.
} else if(sum === 0) {
  console.log(sum, "is equal to 0");

  //If the sum is grater than 0, then the sum and the message "is larger than 0" should be printed.
} else if(sum > 0) {
  console.log(sum, "is larger than 0");

  //If the sum is greater than 100, then the sum and the message "is greater than 100" should be printed.
} else if(sum > 100) {
  console.log(sum, "is greater than 100");

}



