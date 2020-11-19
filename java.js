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
				function pares(x, y) 
				{
        			var pares = [];        
        			for(var i=x; i<=y ;i++)
        			{
        				if(i%2==0)
            			pares.push(i); 
       				}
       				return pares.toString();
				}
    			var resultado = pares(1, 20);
    			var resultadoA = resultado.split(",");
    			resultadoA.forEach(function(numero){
    			var elemento_Li = document.createElement("LI");
    			elemento_Li.innerHTML = numero;
    			document.getElementById("num2").appendChild(elemento_Li);
    })
				


			//num3
				var skills = ["Javascript", "ReactJS", "React Native"];
				function temHabilidade(skills) 
				{
    				if(skills.indexOf("Javascript")==-1)
    				{
          				return false
      				}
      				else
      				{
        				return true
      				}
				}
  				resultado3 = temHabilidade(skills); 
				console.log (resultado3);
				document.getElementById("num3").innerHTML = resultado3;

			//num4
				function experiencia(anos) 
				{ 
       				if(anos<=1)
       				{
        				return "iniciante";
        			}
       				else if(anos > 1 && anos <= 3)
       				{
            			return "intermediário";
        			}
        			else if(anos>3 && anos<=6)
        			{
			            return "avançado";
    			    }
    			    else if(anos>=7)
    			    {
			            return "Jedi Master";
    			    }
   				}
   				var anosEstudo = 7;
    			resultado4 = experiencia(anosEstudo);
    			document.getElementById("num4").innerHTML = resultado4;

    		//num5
    			var usuarios = 
    			[
        			{
        				nome: "Diego",
           				habilidades: ["Javascript", "ReactJS", "Redux"]
        			},
        			{
           				nome: "Gabriel",
            			habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
        			}
   				];
   				function candidato(array)
   				{
        			for (var value of array) 
        			{
            			document.getElementById("num5").innerHTML = ('O', value.nome, 'possui as habilidades: ', value.habilidades.join(', '));
        			}
    			}
    			candidato(usuarios);	