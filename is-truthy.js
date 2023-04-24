const test = "";



//If the passed value is true, then true should be printed.
if(test) {
  console.log(true);

//If the value is false, then a specific result will be printed depending on what type of false value.
} else if(!test) {
    //If the false value is a boolean, then print: "The boolean value false is falsy"
   if((typeof test) === "boolean") {
    console.log("The boolean value false is falsy");

      //If the false value is null, then print:  "The null value is falsy
  } else if(test === null) {
    console.log("The null value is falsy");

      //If the false value is undefined, then print "undefined is falsy";
  } else if(test === undefined) {
    console.log("undefined is falsy");

      //If the false value is the number zero, then print "The number 0 is falsy (the only falsy number)";
  } else if(test === 0) {
    console.log("The number 0 is falsy (the only falsy number)");

      //If the false value is an empty string, then print "The empty string is falsy (the only falsy string)";
  } else if(test === "") {
    console.log("The empty string is falsy (the only falsy string)");
  }
}
 

