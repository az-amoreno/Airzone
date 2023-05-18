let fecha = new Date();

//Con funciones

console.log();
console.log(`Hoy es ${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`);

//Con split

const fechaArray = fecha.toString().split(" ");

console.log(fechaArray[2],fechaArray[1],fechaArray[3]); 