class Alumno {
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];

    constructor(nombre, apellido, edad, carrera, materias = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;

    }

    obtenerCarrera() {
        return this.carrera;
    }

    obtenerDatos() {
        return `${this.nombre} ${this.apellido}`;
    }
    modificarEdad(edad) {
        this.edad = edad;
    }

    agregarMateria(materia) {
        this.materias.push(materia);
    }
    
    mostrarMaterias() {
        console.table(this.materias);
    }
    retornarEdad() {
        return this.edad;
    }
}

let algo= "texto";
module.exports = Alumno;