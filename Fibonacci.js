function fibonacci(numero){
    if (numero < 0) {
        return console.log("Ingresar numeros solo mayores a 0")
    }else if (numero < 2) {
        return numero;
    }else{
        return fibonacci(numero-1)+fibonacci(numero-2);
    }     
}

