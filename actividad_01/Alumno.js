class Alumno {
    nombre = "";
    apellido = "";
    edad = "";
    carrera = "";
    materias = [];
    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;

    }

    obtenerCarrera(){
        return this.carrera;
    }

    obtenerDatos(){
        return `${this.nombre} ${this.apellido}`;
    }
    modificarEdad(edad){
        this.edad = edad;
    }

    agregarMateria(materias){
        this.materias = materias;
    }
    
    mostrarMaterias(){

    }
    retornarEdad(){

    }
}
let algo= "texto";
module.exports = Alumno;