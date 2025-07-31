var numbers= []
var num = 1;

function fizzBuzz(){


    if(num % 3 ==0 & num % 5 == 0){
        numbers.push("fizzBuzz")
    } else if(num % 5 == 0){
      numbers.push("Buzz");
       } else if(num % 3 == 0 ){
         numbers.push("Fizz");
         } else {
            numbers.push(num);
         }

      num = num + 1;

    console.log(numbers)
    
}
