function fnMensagem(nome){
    console.log("seja bem vindo ao sistema sandbox");
    
}


let nome





function calculadora(){
    
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    let operador = document.getElementById('operador').value
    let res = ""
    

    
    
    if(operador == "*"){
        res = Number(num1) * Number(num2) 
    }

    else if(operador == "/"){
        res = Number(num1) / Number(num2)
    }

    else if(operador == "+"){
        res = Number(num1) + Number(num2)
    }
    
    else if(operador == "-"){
        res = Number(num1) - Number(num2)
    }

    else{
        res = "operador invalido resultado zerado"
    }

    console.log(res)
    alert(res)
}


// objetivo: receber 2 numero e somar os valores
//para passar + de 1 parametro eu separo por virgula.
//e SE eu quiser passar +1 parametro que valida
//se o usuario passar o valor de operador, faz a escolha 
function fnSoma(numero1,numero2,ope = "somar"){
    let resultado 

    if(ope == "somar"){
        resultado = numero1 + numero2
    }
    else if(ope == "subtrair"){
        resultado = numero1 - numero2
    }
    else if(ope == "multiplicar"){
        resultado = numero1 * numero2
    }
    else if(ope == "dividir"){
        resultado = numero1 / numero2
    }
    else{

    }


    console.log("o resultado é : " + resultado)
}