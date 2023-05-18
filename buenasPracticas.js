const obj = {
    array: new Array(10000)
}

function badPerformance(){
    console.time('bad');
    
    for(let i=0; i<obj.array.length;i++){
        obj.array[i] = `Hola ${i}`
    }

    console.timeEnd('bad');
}

function goodPerformance(){
    console.time('good');

    let array = obj.array;                  // Al cachear el objeto y su longitud fuera del bucle, ahorramos un pequeño consumo de memoria innecesario por cada pasada del bucle.
    let longitud = obj.array.length;

    for(let i=0; i<longitud;i++){
        array[i] = `Hola ${i}`
    }

    console.timeEnd('good')
}

badPerformance();
