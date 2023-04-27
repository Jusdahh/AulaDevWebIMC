function calcular(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura);
    let classificacao = "";

    if(isNaN(peso) || isNaN(altura)){
        alert("Peso e/ou altura inválidos");
        return;
    }
    else if (imc < 18.5){
        classificacao = "Peso inferior ao normal";
    } else if (imc <= 24.9){
        classificacao = "Peso normal";
    } else if (imc <= 29.9){
        classificacao = "Sobrepeso";
    } else{
        classificacao = "Obesidade";
    }

    document.getElementById("resultado").innerHTML = "IMC: " + imc + " - " + classificacao;
    
}
