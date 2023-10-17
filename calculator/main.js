
function receptor(num){
    
    let ultimaEntrada;
    if(num ===  "**"){
        ultimaEntrada = document.querySelector('.calculos').innerHTML.slice(-2);
    }else{
        ultimaEntrada = document.querySelector('.calculos').innerHTML.slice(-1);
    }

    if ((document.querySelector('.calculos').innerHTML.slice() === '') && (num === "+" || num === "**" || num === "/" || num === "*" || num === ".")) {
        return;
    }

    if (isOperator(ultimaEntrada) && isOperator(num)) {
        if(num ==="**"){
            document.querySelector('.calculos').innerHTML = document.querySelector('.calculos').innerHTML.slice(0, -2) + num;
        }else{
            document.querySelector('.calculos').innerHTML = document.querySelector('.calculos').innerHTML.slice(0, -1) + num;
        }
    } else {
        document.querySelector('.calculos').innerHTML += num;
    }
}

function limparTela(){
    document.querySelector('.calculos').innerHTML = '';
}

function apagarNumero(){
    let apagar = document.querySelector(".calculos").innerHTML;
    document.querySelector(".calculos").innerHTML = apagar.substring(0 , apagar.length - 1);
}

function calcular() {
    let expressao = document.querySelector(".calculos").innerHTML;
    try {
        document.querySelector(".calculos").innerHTML = eval(expressao);
    } catch (error) {
        document.querySelector(".calculos").innerHTML = "Erro";
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/', '**', '.'].indexOf(value) !== -1;
}