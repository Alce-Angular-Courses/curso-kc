interface Edicion {
    editorial: string;
    fecha: number;
}

class Libro implements Edicion {
    public id: number | string;
    public editorial;
    public fecha;
    constructor(public autor: string, public titulo: string) {}
}

const oLibro = new Libro('J.Pérez', 'Angular Facil');

// Al ser una clase sin métodos,
// es posible crear objetos literales que cumplan con el tipo

let oLibro2: Libro = {
    id: '',
    autor: '',
    titulo: '',
    editorial: '',
    fecha: 0};

// También es posible usar los interfaces para definir tipos
let oEdicion: Edicion = {
    editorial: '',
    fecha: 0};

