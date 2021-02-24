		$(function () 
		{
            $("#num1").click(function () 
            {
                let frase = $("#frase1").val();
                let r1 = "";
                if (frase != "") 
                {
                    for (i = frase.length - 1; i >= 0; i--) 
                    {
                        r1 += frase[i];
                    }
                }
                $("#resultado1").text(r1);
            })
        })