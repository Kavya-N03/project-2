// temperature conversion
function temperature(){
    if(celsius.value== "" ||isNaN(celsius.value)){
      alert("Enter temperature in Celsius");
      return;
    }
let c=document.getElementById("celsius").value;
let f= (c*9/5)+32;
document.getElementById("farenheit").value=f.toFixed(2);
}
function reset1(){
    document.getElementById("celsius").value="";
    document.getElementById("farenheit").value="";
}

// weight conversion
function weight(){
    if(kgs.value === "" || isNaN(kgs.value)){
        alert("Enter weight in Kilogram");
        return;
    }
let kg=document.getElementById("kgs").value;
let p= kg*2.205;
document.getElementById("pds").value=p.toFixed(2);
}
function reset2(){
    document.getElementById("kgs").value = "";
    document.getElementById("pds").value = "";
}

// distance conversion
function distance(){
    if(kms.value === "" || isNaN(kms.value)){
        alert("Enter distance in Kilometers");
        return;
    }
let km=document.getElementById("kms").value;
let ms=km*0.621;
document.getElementById("ms").value=ms.toFixed(2);
}
function reset3(){
    document.getElementById("kms").value = "";
    document.getElementById("ms").value = "";
}
