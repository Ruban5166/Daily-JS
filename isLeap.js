function isLeap(year) {
    
/**************Don't change the code above****************/    
    var ans;
 if(year % 4 === 0){
     if(year % 100 === 0){
         if(year % 400 === 0){
             ans = "Leap Year"
         }
         else{
             ans ="Not Leap"
         }
     }
     else{
         ans = "Leap Year"
     }
 }
 else {
     ans = "Not Leap"
 }

    
return ans
/**************Don't change the code below****************/    

}


isLeap(1998)
