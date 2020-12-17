var botao3 = document.getElementById("btOk3");

	botao3.onclick = function ()	{
	var select3 = document.getElementById('tipo3');
	var valor3 = select1.options[select3.selectedIndex].value;
		console.log (valor3);
		var numero3 = document.getElementById('num3').value;
		numero3 = parseInt (numero3);
		var mol = 1;
		var massa = 2;


	var resultado3; 
	if (valor3=="h2") {
			resultado3 = numero3 * massa / mol; 
	} else {
			resultado3= numero3 * mol / massa; 
	}
		var retorno3=document.getElementById("resultado3");
		var r3=resultado3;
		var resultStr3 = document.createTextNode(r3);
		retorno3.appendChild(resultStr3);
		retorno3.innerHTML = "O resultado é: ";
		retorno3.appendChild(resultStr3);
		
		
		/*imprimir a conta
		var v3=document.getElementById("n3");
		var numeroStr3=numero3;
		v3.appendChild(numeroStr3);
		v3.innerHTML="";
		v3.appendChild(numeroStr3)*/
}