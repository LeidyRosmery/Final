var arreglo= [  { nombre : "Meche", apellido : "zubieta", promocion : "1era promocion", Estado : "Trabajando" },
                { nombre : "Arabela", apellido : "Seguil", rol : "2da promocion", Estado : "Trabajando" },
                { nombre : "Maria", apellido : "Zubieta", rol : "2da promocion", Estado : "Trabajando" },
                { nombre : "Guadalupe", apellido : "Rivariola", rol : "3ra promocion", Estado : "Trabajando" },
                { nombre : "Sara", apellido : "casa", promocion : "3era promocion", Estado : "Trabajando" },
                { nombre : "Daniela", apellido : "Duran", rol : "4ta promocion", Estado : "Trabajando" },
                { nombre : "Michelle", apellido : "Seguil", rol : "5ta promocion", Estado : "Trabajando" },
                { nombre : "Diana", apellido : "Navarro", rol : "5ta promocion", Estado : "Trabajando" },
              ];

for(var i=0 ; i< arreglo.length ;i++){
  document.getElementById("mostrar").innerHTML +=
          "<ul>" +
          "<li>Nombre: " + arreglo[i].nombre + "</li>" +
          "<li>Apellido: " + arreglo[i].apellido  + "</li>" +
          "<li>DNI: " + arreglo[i].rol  + "</li>" +
          "<li>Dirección: " + arreglo[i].Estado  + "</li>" +
        "</ul>";

}
