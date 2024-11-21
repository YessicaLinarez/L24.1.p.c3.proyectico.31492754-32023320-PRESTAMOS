/*Se desea llevar un control de los estudiantes que 
asisten a presentar un examen. Se tiene por cada 
participante: nombre, cédula, sexo y nota. Se requiere 
de un programa que permita el registro de esta 
información, conociendo al principio de la ejecución el 
valor del examen y el mínimo aprobatorio. Estructuras de datos recomendadas 
 Cl_examen: valor, minAprueba 
 Cl_estudiante: nombre, cedula (‘F’ - ‘M’), sexo 
y nota 
Primeros requerimientos 
Los datos entrada vienen en un archivo (con 
import... ver anexo) 
 Porcentaje de aprobados y reprobados 
 Estudiantes con la mejor nota 
 Chicas por encima de la nota promedio */


import Cl_estudiante from "./Cl_estudiante.js";
import Cl_examen from "./Cl_examen.js";
import Dt_estudiantes from "./Dt_estudiantes.js";
import Dt_examen from "./Dt_examen.js";

let examen = new Cl_examen(Dt_examen.valor, Dt_examen.minAprueba);
Dt_estudiantes.forEach((estudiante) => examen.agregarEstudiantes(new Cl_estudiante(estudiante.cedula, estudiante.cedula, estudiante.sexo, estudiante.nota)));

let porcentaje = () => {
  let estudiantes = examen.porcentaje();
  salida2.innerHTML = `<br>Porcentaje de Aprobados: ${estudiantes[0]}% <br>Porcentaje de Reprobados: ${estudiantes[1]}%`;
}


let salida1 = document.getElementById("salida1"); 
let salida2 = document.getElementById("salida2"); 
let opciones = document.getElementById("opciones"); 
salida1.innerHTML = ` Seleccione su opcion: 
<br> 1 = Porcentaje de aprobados y reprobados 
<br> 2 = Estudiantes con la mejor nota 
<br> 3 = Chicas por encima de la nota promedio 
<br> 4 = Agregar estudiante 
<br> 5 = Quitar estudiante 
<br> 6 = Modificar estudiante 
<br> 7 = Listar estudiante `;
    opciones.onclick = () => {
      let opcion = prompt("Seleccione su opcion");
      switch (opcion) {
          case "1":
              porcentaje();
              break;
      }
  };




