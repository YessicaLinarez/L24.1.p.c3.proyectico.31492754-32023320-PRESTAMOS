export default class Cl_examen {
    constructor() {
        this.estudiantes=[];
    }
     agregarEstudiantes(estudiante){
      this.estudiantes.push(examen);
   }
      porcentaje(){
         let porctAprobados = 0;
         let porctReprobados = 0;
         let porcentaje = [];
         let nota = this.estudiantes[0].nota;
         for(let i = 1; i< this.estudiantes.length; i++){
            if(this.estudiantes[i].nota > nota){
               porctAprobados ++;
            } else {
               porctReprobados ++;
            }
         }
         porctAprobados = porctAprobados * 100/this.estudiantes.length;
         porctReprobados = porctAprobados * 100/this.estudiantes.length;
         porcentaje.push(porctAprobados, porctReprobados);
         return porcentaje; 
      } 
     estudianteMayorNota(){
         let mayorNota = this.estudiantes[0].nota;
         for(let i = 1; i<this.estudiantes.length; i++){
            if(this.estudiantes[i].nota > mayorNota){
               mayorNota = this.estudiantes[i].nota;
            }
         }
         return mayorNota;  
      } 
      notaPromedio(){
         let promedio = 0;
            for(let i=0; i<this.estudiantes.length; i++){
               promedio += this.estudiantes[i].nota;
            }
            promedio = promedio / this.estudiantes.length;
            return promedio;
      }
      chicasEncimaPromedio(){
         let promedio = this.notaPromedio();
         let mayorPromedio = this.estudiantes.filter((estudiantes) => estudiantes.nota > promedio);
         return this.mayorPromedio.filter((estudiante) => {
            estudiantes.sexo == "F"
         });
   }

}


    