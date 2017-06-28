var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}
  function estudiante(nombre, tecnico, habilidades)
  {
    this.nombre = nombre;
    this.tecnico = tecnico;
    this.habilidades = habilidades;
  }
function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombres = prompt("Ingrese nombre del estudiante");
    var punTecnicos = prompt("Ingrese puntos tecnicos");
    var punHabilidad = prompt("Ingrese puntos de habilidades");
    var agregaEstudiantes = new estudiante(nombres, punTecnicos, punHabilidad);
    estudiantes.push(agregaEstudiantes);
    return agregaEstudiantes;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.habilidades + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}
function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var listar = "";
    for(var i = 0; i < estudiantes.length; i++)
    {
      listar = listar + mostrar(estudiantes[i]);
    }
    return listar;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

        for(var i = 0; i < estudiantes.length; i++)
        {
          if(estudiantes[i].nombre == nombre)
          {
            return estudiantes[i];
          }
        }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function(a, b)
  {
  return  b.tecnico - a.tecnico;
  });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function(a, b)
    {
    return  b.habilidades - a.habilidades;
    });

}
