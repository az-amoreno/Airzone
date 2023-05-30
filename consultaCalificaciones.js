const estudiantes = [
  {
    nombre: "Francisco Martínesaaz Castillo",
    dni: "79423483X",
    edad: 23,
    calificacion: 6.4,
    clave: "FmC!23xZ",
  },
  {
    nombre: "Patricia Figueroa Rueda",
    dni: "27386238F",
    edad: 54,
    calificacion: 5,
    clave: "PfR*54dF",
  },
  {
    nombre: "María López González",
    dni: "79231478Y",
    edad: 28,
    calificacion: 7.8,
    clave: "MlG$28zY",
  },
  {
    nombre: "Juan Rodríguez Pérez",
    dni: "82134905Z",
    edad: 31,
    calificacion: 5.9,
    clave: "JrP@31zZ",
  },
  {
    nombre: "Ana García Ramírez",
    dni: "76890342A",
    edad: 26,
    calificacion: 6.2,
    clave: "AgR26@*a",
  },
  {
    nombre: "Carlos Hernández Sánchez",
    dni: "80321456B",
    edad: 24,
    calificacion: 6.9,
    clave: "ChS24$*b",
  },
  {
    nombre: "Laura Torres Fernández",
    dni: "81643920C",
    edad: 29,
    calificacion: 6.7,
    clave: "LtF$29cC",
  },
  {
    nombre: "Pedro Jiménez Martín",
    dni: "79483015D",
    edad: 25,
    calificacion: 7.1,
    clave: "PjM@25dD",
  },
  {
    nombre: "Sofía González Herrera",
    dni: "78746123E",
    edad: 27,
    calificacion: 4.5,
    clave: "SgH27!eE",
  },
  {
    nombre: "Alejandro Ruiz Castro",
    dni: "83124938F",
    edad: 30,
    calificacion: 6.8,
    clave: "ArC$30fF",
  },
  {
    nombre: "Lucía Martínez Ortega",
    dni: "79934927G",
    edad: 22,
    calificacion: 9.6,
    clave: "LmO22*gG",
  },
  {
    nombre: "Miguel Torres Navarro",
    dni: "81294075H",
    edad: 32,
    calificacion: 6.3,
    clave: "MtN$32hH",
  },
];

let validado = true;

do {
  let consulta = prompt("Introduzca el DNI de su consulta")
    .toUpperCase()
    .trim()
    .replace(/\s/g, "");

  var estudianteEncontrado = estudiantes.find(
    (estudiante) => estudiante.dni === consulta
  );

  if (/^\d{8}[A-Za-z]$/.test(consulta)) {
    if (estudianteEncontrado) {
      alert(`Hola ${estudianteEncontrado.nombre}`);

      for (let i = 3; i > 0; i--) {
        let clave = prompt("Introduzca su contraseña");

        let claveCorrecta = estudianteEncontrado.clave === clave;

        if (claveCorrecta) {
          alert(`Su calificación es: ${estudianteEncontrado.calificacion}`);
          i = -1;

          validado = true;
        } else {
          alert(
            `La clave introducida no es correcta ${
              i === 2
                ? "Te queda " + (i - 1) + " intento"
                : "Te quedan " + (i - 1) + " intentos"
            }`
          );

          if (i === 1) {
            validado = false;
          }
        }
      }
    } else {
      alert("El DNI ingresado no se encuentra en la lista de estudiantes.");
      validado = false;
    }
  } else {
    alert(
      "El formato del DNI no es válido. Debe tener 8 números y terminar con una letra."
    );
    validado = false;
  }
} while (!validado);

if (estudianteEncontrado.calificacion >= 5) {
  document.write("¡Enhorabuena por aprobar el examen!");
}