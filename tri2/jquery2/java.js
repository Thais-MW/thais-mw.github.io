
		//num 1
		 $(function () {
            $("#num1").click(function () {
                let frase1 = $("#frase1").val();
                let result = "";
                if (frase1 != "") {
                    for (i = frase1.length - 1; i >= 0; i--) {
                        result += frase1[i];
                    }
                }
                $("#resultado1").text(result);
            })
        })

		 //num2
		function Vogal(tx) {
            tx = tx.toUpperCase();
            if (tx == "A" || tx == "E" || tx == "I" || tx == "O" || tx == "U")
                return true;
            return false;
        }
        $(function () {
            $("#num2").click(function () {
                let frase2 = $("#frase2").val();
                let result = "";
                for (i = 0; i <= frase2.length - 1; i++) {
                    if (Vogal(frase2[i]))
                        result += "<strong>" + frase2[i] + "</strong>";
                    if (Vogal(frase2[i]) == 0)
                        result += frase2[i];
                }
                $("#resultado2").html(result);
            })
        })

        //num3
         function Ocorrencia(obj, palavra) {
            return obj.filter((v) => (v === palavra)).length;

        }

        $(function () {

            $("#limpar").click(function () {
                $("#tabela").empty();
                $("#frase3").val("");
            })

            $("#num3").click(function () {
                $("#tabela").empty();
                let frase3 = $("#frase3").val();
                var palavras = frase3.split(" ").map(function (palavra) {
                    return palavra.toLocaleLowerCase();
                });
                var i = 0;
                var arryo = [];
                var testefoi = [];
                var x = 0;
                for (palavra of palavras) {
                    if (testefoi.indexOf(palavra) == -1) {
                        let ocorren = (Ocorrencia(palavras, palavra));
                        testefoi.push(palavra);
                        arryo[x] = ocorren;
                    }
                    else
                        x--;
                    i++; x++;
  var s_minusculas = /[a-z]/;

        var s_maiusculas = /[A-Z]/;

        var s_numeros = /[1-9]/;

        var s_especiais = /[@#!$%&*()-+.,=]/;

        $(function () {



            $("#frase3").keyup(function () {

                if ($("#frase3").val() == "") {

                    $("#resulatdo3").text("");

                    $("#resulatdo3").css('color', 'black');

                }

            })



            $("#senha").click(function () {

                let frase3 = $("#frase3").val();

                let result = "";

                if ($("#frase3").val() == "") {

                    $("#resulatdo3").text("Insira uma senha");

                    $("#resulatdo3").css('color', 'black');

                }

                if (s_minusculas.test(frase3) || s_maiusculas.test(frase3)) {

                    $("#resulatdo3").text("Fraca");

                    $("#resulatdo3").css('color', 'red');

                }

                if (s_minusculas.test(frase3) && s_maiusculas.test(frase3) && s_numeros.test(frase3)) {

                    $("#resulatdo3").text("Média");

                    $("#resulatdo3").css('color', 'orange');

                }



                if (s_minusculas.test(frase3) && s_maiusculas.test(frase3) && s_numeros.test(frase3) && s_especiais.test(frase3)) {

                    $("#resulatdo3").text("Forte");

                    $("#resulatdo3").css('color', 'green');

                }

            })

        })               }
                for (i = 0; i < testefoi.length; i++) {
                    let tr = $("<tr>");
                    $("#tabela").append(tr);
                    let td = $("<td>");
                    let td2 = $("<td>");
                    td.text(testefoi[i]);
                    td2.text(arryo[i]);
                    tr.append(td);
                    tr.append(td2);
                }; //Adicionando na tabela

            });
        });		

        //num4
        function ocorrencias(palavras, palavra) {
            return palavras.filter((v) => (v === palavra)).length;

        }//contador de ocorrências
        $(function () {
            $("#limpeza").click(function () {
                $("#frase4").val("");
                $("#resultado4").text("");
            })
            $("#num4").click(function () {
                let frase4 = $("#frase4").val();
                var palavras = frase4.split(" ").map(function (palavra) {
                    return palavra.toLocaleLowerCase();
                });
                var array = new Array;
                var i = 0;
                var x = 0;
                var foio = [];
                for (palavra of palavras) {
                    if (foio.indexOf(palavra) == -1) {
                        let oco = ocorrencias(palavras, palavra);
                        foio.push(palavra);
                        array[x] = oco;
                    }
                    else {
                        x--;
                    }
                    i++;
                    x++;
                }
                var empateobj = [];
                var maiorpalavra;
                var contador = 0;
                for (i = 0; i < foio.length; i++) {
                    var maior = Math.max.apply(null, array); //BIBILIOTECA DE MATEMÁTICA DO JS
                    if (array[i] == maior) {
                        contador++;
                        maiorpalavra = foio[i];
                        empateobj[i] = foio[i];
                    }
                }
                if (contador > 1) {
                    $("#resultado4").text(empateobj + "/ Essas palavras empataram ,  com " + array[0] + " ocorrências ");
                }
                else {
                    $("#resultado4").text("A palavra mais ocorrida: " + maiorpalavra + ", com :  " + maior + " ocorrências.");
                }
            })
        })

        //num5
        var s_minusculas = /[a-z]/;
        var s_maiusculas = /[A-Z]/;
        var s_numeros = /[1-9]/;
        var s_especiais = /[@#!$%&*()-+.,=]/;
        $(function () {
            $("#num5").click(function () {
                if ($("#frase5").val() != "") {
                    let procurar = $("#frasee5").val();
                    let substituir = $("#fraseee5").val();
                    let texto = $("#frase5").val();
                    let array = texto.split(" ");
                    for (i = 0; i < array.length; i++) {
                        if (array[i] == procurar) {
                            array[i] = substituir;
                        }
                    }
                    let test = ""
                    test = array.join(" ");
                    $("#resultado5").text(test);
                    $("#frasee5").val("");
                    $("#fraseee5").val("");
                    $("#frase5").val("");
                }

                else {
                    $("#resultado5").text("Insira um texto válido");
                }
            })
        })

        //num6
        var s_minusculas = /[a-z]/;
        var s_maiusculas = /[A-Z]/;
        var s_numeros = /[1-9]/;
        var s_especiais = /[@#!$%&*()-+.,=]/;
        $(function () {
            $("#num6").click(function () {
                let frase6 = $("#frase6").val();
                if (frase6 != "") {
                    let d1 = frase6.substr(8, 2);
                    let a1 = frase6.substr(0, 4);
                    let m1 = frase6.substr(5, 2);
                    const agora = new Date();
                    const nascimento = new Date(a1, m1 - 1, d1);
                    const diff = Math.abs(agora.getTime() - nascimento.getTime());
                    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
                    $("#resultado6").text(" Se passaram: "+days+ " dias desde o dia: " + d1 + "/" + m1 + "/" + a1 + ". ");
                    $("#frase6").val("");
                }
            })
        })
        
        //num7
		 var s_minusculas = /[a-z]/;
        var s_maiusculas = /[A-Z]/;
        var s_numeros = /[1-9]/;
        var s_especiais = /[@#!$%&*()-+.,=]/;
        $(function () {
            $("#num7").click(function () {
                let frase7 = $("#frase7").val();
                if (frase7 != "") {
                    let d1 = frase7.substr(8, 2);
                    let a1 = frase7.substr(0, 4);
                    let m1 = frase7.substr(5, 2);
                    var mes = ""
                    switch (m1) {
                        case '01':
                            mes = "janeiro"
                            break;
                        case '02':
                            mes = "fevereiro"
                            break;
                        case '03':
                            mes = "março"
                            break;
                        case '04':
                            mes = "abril"
                            break;
                        case '05':
                            mes = "maio"
                            break;
                        case '06':
                            mes = "junho"
                            break;
                        case '07':
                            mes = "julho"
                            break;
                        case '08':
                            mes = "agosto"
                            break;
                        case '09':
                            mes = "setembro"
                            break;
                        case '10':
                            mes = "outubro"
                            break;
                        case '11':
                            mes = "novembro"
                            break;
                        case '12':
                            mes = "dezembro"
                            break;
                    }
                    $("#frase7").val("");
                    $("#resultado7").text(" A data " + d1 + "/" + m1 + "/" + a1 + " Em extenso fica: " + d1 + " de " + mes + " de " + a1);
                }
            })
        })

        //num8
        var s_minusculas = /[a-z]/;
        var s_maiusculas = /[A-Z]/;
        var s_numeros = /[1-9]/;
        var s_especiais = /[@#!$%&*()-+.,=]/;
        $(function () {
            $("#num8").click(function () {
                let frase8 = $("#frase8").val();
                let frasee8 = $("#frasee8").val();
                if (frase8 == "" || frasee8 == 0) {
                    $("#resultado8").text("Insira uma data válida")

                }
                else {
                    let d1 = frase8.substr(8, 2);
                    let a1 = frase8.substr(0, 4);
                    let m1 = frase8.substr(5, 2);
                    let d2 = frasee8.substr(8, 2);
                    let a2 = frasee8.substr(0, 4);
                    let m2 = frasee8.substr(5, 2);
                    const now = new Date(a1, m1 - 1, d1);
                    const past = new Date(a2, m2 - 1, d2);
                    const diff = Math.abs(now.getTime() - past.getTime());
                    const days = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7)); //Contador de semanas 
                    $("#resultado8").text("A diferença de dias entre " + d1 + "/" + m1 + "/" + a1 + " e " + d2 + "/" + m2 + "/" + a2 + " é de " + days + " semanas")
                    $("#frase8").val("");
                    $("#frasee8").val("");
                }
            })
        })

        //num9
         var s_minusculas = /[a-z]/;
        var s_maiusculas = /[A-Z]/;
        var s_numeros = /[1-9]/;
        var s_especiais = /[@#!$%&*()-+.,=]/;
        $(function () {

            $("#frase9").keyup(function () {
                if ($("#frase9").val() == "") {
                    $("#resul").text("");
                    $("#resultado9").css('color', 'black');
                }
            })

            $("#num9").click(function () {
                let frase9 = $("#frase9").val();
                let result = "";
                if ($("#frase9").val() == "") {
                    $("#resultado9").text("Insira uma senha");
                    $("#resultado9").css('color', 'black');
                }
                if (s_minusculas.test(frase9) || s_maiusculas.test(frase9)) {
                    $("#resultado9").text("Fraca");
                    $("#resultado9").css('color', 'red');
                }
                if (s_minusculas.test(frase9) && s_maiusculas.test(frase9) && s_numeros.test(frase9)) {
                    $("#resultado9").text("Média");
                    $("#resultado9").css('color', 'orange');
                }

                if (s_minusculas.test(frase9) && s_maiusculas.test(frase9) && s_numeros.test(frase9) && s_especiais.test(frase9)) {
                    $("#resultado9").text("Forte");
                    $("#resultado9").css('color', 'green');
                }
            })
        })  