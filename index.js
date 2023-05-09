//Obtenemos elementos del DOM
const form=document.querySelector('form');
const tableBody=document.getElementById('table-body');

//Agregamos listener al formulario

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const loadOrigin= (document.getElementById('load-origin').value)
    const loadDestination= (document.getElementById('load-destination').value)
    const loadDate= new Date(document.getElementById('load-date').value)
    const loadTime= (document.getElementById('load-time').value)
    const MontoPago= 200;

    //Creamos el ciclo SI EL ORIGEN ES DIFERENTE QUE DESTINO
    function MonFinal(){
        if(loadOrigin != loadDestination){
        montoPago +=50;
    }
    }
    if(loadOrigin != loadDestination){
        montoPago +=50;
    }

    if(loadDate.getDay()==5|| loadDate.getDay()==6|| loadDate.getDay()==0){
       montoPago +=100; 
    }
    
    var horaPartida= parseInt(loadTime.substring(0,2));
    if((horaPartida>=7 && horaPartida <=9)|| (horaPartida>=16 && horaPartida <=18)){
        montoPago +=75;
    }

    tableBody.appendChild(row);

})