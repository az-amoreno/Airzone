const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "Fernando Vázquez",
    numPags: 249,
    editorial: "Anaya",
    precio: 19.80 + '€',
}

for(let propiedad in libro){
    console.log(`La propiedad ${propiedad} contiene: ${libro[propiedad]}`)
}