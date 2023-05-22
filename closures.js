const miContador = (function(){
    let _contador = 0;

    function incrementar(){
        return _contador++;
    }

    function decrementar(){
        return _contador--;
    }

    function valor(){
        return _contador;
    }

    return{
        incrementar,
        decrementar,
        valor
    }
})();

miContador.valor()
miContador.incrementar()
miContador.valor()