var counter = 0;

function responder(){

var x = document.getElementById("sender").value;
var y = document.getElementById("result");
var z = document.getElementById("sent");

if (counter == 0){
  z.innerHTML = x;
  y.innerHTML = "hello";

}
else if (counter == 1){
  z.innerHTML = x;
  y.innerHTML = "ok";

}
else if (counter == 2){
  z.innerHTML = x;
  y.innerHTML = "thats nice";

}
else if (counter == 3){
  z.innerHTML = x;
  y.innerHTML = "hmm";

}
else if (counter == 4){
  z.innerHTML = x;
  y.innerHTML = "interesting";

}
else if (counter == 5){
  z.innerHTML = x;
  y.innerHTML = "oh";

}
else if (counter == 6){
  z.innerHTML = x;
  y.innerHTML = "I see";
  
}
else if (counter == 7){
  z.innerHTML = x;
  y.innerHTML = "yep";

}
else if (counter == 8){
  z.innerHTML = x;
  y.innerHTML = "bruh";
  counter = 0;
}
counter = counter + 1;
}
