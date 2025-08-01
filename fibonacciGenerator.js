function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var fibonacci = [];

    for(var i = 0;i<n; i++){

        if(fibonacci.length < 2){

            fibonacci.push(i);
        }else{

           var temp = fibonacci[i-1] + fibonacci[i-2]

            fibonacci.push(temp)
        }

        
    }
    
    
    
    
    return fibonacci;

    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

