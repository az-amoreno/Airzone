const suma = (a,b) =>{
    a = a ?? 0; //  'a' = 'a' y si no es así, 'a' = 0 
    b = b ?? 0; //  'b' = 'b' y si no es así, 'b' = 0

    return a+b;
}

console.log(suma());