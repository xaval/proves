// DECLARACIÓN DE OBJETOS Y VARIABLES
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

var numero = document.getElementById("numero");

var hola = document.getElementById("hola");

var fecha = new Date();
var dia  = fecha.getDay();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var segundo = fecha.getSeconds();

var bisiesto = document.getElementById("bisiesto");

var btnReloj = document.getElementById("reloj");
var detenerReloj = document.getElementById("detener-reloj");
var muestroHora = document.getElementById("muestro-hora");

var btnAlarma = document.getElementById("alarma");
var detenerAlarma = document.getElementById("detener-alarma");


// DECLARACIÓN DE FUNCIONES
function eventoClick(evento)
{
	// alert("Has presionado el botón");
	alert("Has presionado el botón en el evento '"+evento.type+" 'con el objeto de nombre id' "+evento.target.id+"'");
	// console.log(evento);

	boton2.removeEventListener("click", eventoClick);

}

function otroEventoClick(evento)
{
	alert("Has presionado el botón en el evento '"+evento.type+" 'con el objeto de nombre id' "+evento.target.id+"'");

	console.log(evento);
}

function parImpar()
{
	var numero = prompt("Ingresa un número");

	// isNaN - in Not a Number 
	// true si el valor es alfanumérico,
	// false si es numérico

	if(isNaN(numero))
	{
		alert("No me engañes eso no es un número");
	}	
	else
	{	
		//alert("Es un número");
		var modulo = numero%2;
		var tipo = (modulo==0)?" Par":" Impar";
		alert("El número " +numero+" es: "+tipo);
	}	

}

function saluda()
{
	// alert(fecha);
	//alert(hora);

	// Algoritmo para saludar:
	// 	1) El día tiene 24 horas que van de 0 a 23
	// 	2) Decimos Estamos durmiendo de las 0 a las 5
	// 	3) Decimos Buenos días de las 6 a las 11
	// 	4) Decimos Buenas tardes de las 12 a las 18
	// 	5) Decimos Buenas noches de las 19 a las 23

	var hojaCSS = document.createElement("link");
	hojaCSS.rel = "stylesheet";

	//if(hora <= 5)
	if(hora < 6)
		{
			alert("Encara dorm !!!!!");
			hojaCSS.href = "activos/duermete.css";		
		}
	// else if(hora > 5 && hora < 12)
	else if(hora >= 6 && hora <= 11)
		{
			alert("Bon dia");
			hojaCSS.href = "activos/dia.css";
		}
	else if (hora >=12 && hora <= 18)
	            {
			alert("Bones tardes");	
			hojaCSS.href = "activos/tarde.css";	            	
	            }		
	else
		{
			alert("Bona nit !!!");
			hojaCSS.href = "activos/noche.css";
		}

	document.head.appendChild(hojaCSS);	

	alert(dia);
	// DLMM i JVS
	// 0123    456            
}

function anioBisiesto()
{
	var anio = prompt("Ingresa un año");

	if(isNaN(anio))
	{
		alert("Te he pedido un año, por favor introducelo");
	}
	else
	{
		// 1) El año debe ser divisible entre 4, por ejemplo 2004, 2008.
		// 2) Pero si el año es divisible entre 4 y 100, entonces no es bisiesto, por ejemplo 2100, 2200
		// 3) Pero si el año es divisible entre 100 y 400, entonces su es bisiesto ejemplo 2000, 2400.
		
		if((anio%4 == 0 && anio%100 != 0) || anio%400 == 0)
		{
			alert("El año "+anio+" es bisiesto");	
		}
		else
		{
			alert("El año "+anio+" No es bisiesto" );
		}	
	}	
}

function reloj()
{
	var fecha = new Date();
	var dia  = fecha.getDay()
	var hora = fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundo = fecha.getSeconds();

	if(hora<=9)
	{
		hora = "0"+ hora;	
	}

	if(minuto <=9)
	{
		minuto = "0"+ minuto;
	}

	if(segundo<=9)
	{
		segundo = "0"+ segundo;	
	}

	muestroHora.innerHTML = "<h1>"+hora+":"+minuto+":"+segundo+"</h1>"
}

function alarma()
{
	var audio = document.createElement("audio");
	audio.src = "activos/alarma.mp3";
	return audio.play();
}

// ASIGNACIÓN DE EVENTOS
// Los manejadores de eventos semánticos se ejecutan a la carga del documento
window.onload = function(){
	boton.onclick = eventoClick;
	boton.onclick = otroEventoClick;

	boton2.addEventListener("click", eventoClick);

	numero.addEventListener("click", parImpar);

	hola.addEventListener("click", saluda);

	bisiesto.addEventListener("click", anioBisiesto);

	btnReloj.addEventListener("click", function(){
		//setInterval(reloj, 1000);
		iniciarReloj = setInterval(reloj, 1000);
	});

	detenerReloj.addEventListener("click", function(){
		clearInterval(iniciarReloj);
	});

	btnAlarma.addEventListener("click", function(){
		iniciarAlarma =setTimeout(alarma, 3000);
	});

	detenerAlarma.addEventListener("click", function(){
		clearTimeout(iniciarAlarma);
	});
}
