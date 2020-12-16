// trazendo o botao para manipulações
var botao = document.getElementById("btOk");

// programando o evento clique do botao
botao.onclick = function ()	{
  var select = document.getElementById('selecao');
  var valor = select.options[select.selectedIndex].value;
	console.log (valor);
	var numero = document.getElementById('num').value;
	numero = parseInt (numero);
	var mol = 1;
  var massa = 16;

//assumindo o valor do else
  var resultado = numero * mol / massa; 
  if (valor=="mol") {// não declare variavel dentro de ifs
		resultado = numero * massa / mol; 
  } 
	var retorno=document.getElementById("resultado");
	var r=resultado;
	var resultStr = document.createTextNode(r);
	retorno.appendChild(resultStr);	
  retorno.innerHTML = "O resultado é: ";
	retorno.appendChild(resultStr);
}