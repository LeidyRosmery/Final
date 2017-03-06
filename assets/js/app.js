var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
  if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
    console.log("muestra");
	} else{
		divtext.style.display = "block";
    }
}

function calcularPrimero(){
var div=document.getElementById("resultadoPrimero");
var resp=document.getElementsByClassName("sprint1");
var result=0;
console.log(resp);
for(var i =0 ; i<resp.length ; i++){
  if(resp[i].checked){
    if(resp[i].value=="Expresadas" || resp[i].value=="pop" || resp[i].value=="propiedades"){
        result++;
    }
  }
}
console.log(result);
div.innerHTML="<strong>" +"Tienes "+ result +" respuestas correctas ";
}


function calcularSegundo(){
  var div2=document.getElementById("resultadoSegundo");
  var resp2=document.getElementsByClassName("conjunto2");
  var result2=0;
  console.log(resp2);
  for(var i =0 ; i<resp2.length ; i++){
    if(resp2[i].checked){
      if(resp2[i].value=="init" || resp2[i].value=="comprobar" || resp2[i].value=="Object"){
          result2++;
      }
    }
  }
  console.log(result2);
  div2.innerHTML="<strong>" +"Tienes "+ result2 +" respuestas correctas ";
}
function calcularPuntaje(){

}
