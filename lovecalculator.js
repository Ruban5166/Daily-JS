var yourName = prompt("Enter Your name:");
var partnerName = prompt("Enter Your Partnername:");


var n = Math.random();
var lovePercentage = Math.floor(n *100)+1;

if(lovePercentage > 70){
    alert("Your love percentage is:"+lovePercentage + "your love with yathis and yathis");
}

else if(lovePercentage > 30 && lovePercentage <= 70){
    alert("Your love percentage is:"+lovePercentage + "your made for each other");
}
    
else{

    alert("You love percentage is:" + lovePercentage + "you both are going together oil and water");
}
