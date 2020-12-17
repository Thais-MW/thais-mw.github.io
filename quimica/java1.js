	// trazendo o botao para manipulações
	var botao1 = document.getElementById("btOk1");

	// programando o evento clique do botao
	botao1.onclick = function ()	{
	var select1 = document.getElementById('tipo1');
	var valor1 = select1.options[select1.selectedIndex].value;
		console.log (valor1);
		var numero1 = document.getElementById('num1').value;
		numero1 = parseInt (numero1);
		var mol = 1;
	var massa = 16;
	var resultado1;

	
	if (valor1=="mol") {// não declare variavel dentro de ifs
		resultado1 = numero1 * massa / mol;
		n1a = numero1+" • 16 = "+resultado1;
		document.getElementById("n1a").innerHTML = n1a; 
	} else{
		resultado1 = numero1 * mol / massa; 
		n1b = numero1+" : 16 = "+resultado1;
		document.getElementById("n1b").innerHTML = n1b; 
	}
		var retorno1=document.getElementById("resultado1");
		var r1=resultado1;
		var resultStr1 = document.createTextNode(r1);
		retorno1.appendChild(resultStr1);
		retorno1.innerHTML = "O resultado é: ";
		retorno1.appendChild(resultStr1);
}
