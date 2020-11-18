			//num1
				var endereco = 
				{
					rua: "Rua dos pinheiros",
					numero: 1293,
					bairro: "Centro",
					cidade: "São Paulo",
					uf: "SP"
				};
		
				var resultado1 = "O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairro <strong>" + endereco.bairro + "</strong>, na rua \"" + endereco.rua + " \" com n° " + endereco.numero + ".";
				console.log (resultado1);
				document.getElementById("num1").innerHTML = resultado1;

			//num2
				function PARES (X, Y)
				{
					var pares = [];
					for (i = x; i <= y; i++) 
					{
						if(i%2==0)
							pares.push(i);
					}
					resultado2 = pares.toString();
				}

				console.log (resultado2);
				document.getElementById("num2").innerHTML = resultado2;

			//num3
				console.log (resultado1);
				document.getElementById("num3").innerHTML = resultado1;

			//num4
				console.log (resultado1);
				document.getElementById("num4").innerHTML = resultado1;

			//num5
				console.log (resultado1);
				document.getElementById("num5").innerHTML = resultado1;
		

