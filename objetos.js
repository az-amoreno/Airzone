const trabajador = {
  nombre: "Alberto",
  edad: 18,
  puesto: "Programador",
  empresa: "Airzone",
  ciudad: "Málaga",
  pais: "España",
};

function getNombre() {
  return trabajador.nombre;
}

function getEdad() {
  return trabajador.edad;
}

function gePuesto() {
  return trabajador.puesto;
}

function getEmpresa() {
  return trabajador.empresa;
}

function getCiudad() {
  return trabajador.ciudad;
}

function getPais() {
  return trabajador.pais;
}

function mostrarInfo() {
  return console.log(
    `${getNombre()} tiene ${getEdad()} años y trabaja de ${gePuesto()} en ${getEmpresa()}, ${getCiudad()} (${getPais()}).`
  );
}

mostrarInfo();