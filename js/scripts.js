$(document).ready(function() {
  $("#prime").submit(function(event) {
   event.preventDefault();
   const inputNumber = parseInt($("#number").val());
   function prime(number) {
 for (let i = 2; i < number; i++) {
 if ( number % i === 0) {
   return "It's not a prime number";
 }
 }
 return "It's a prime number";
   }

  $("#output").text(prime(inputNumber));
  });
});