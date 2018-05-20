interface Edicion {
    editorial: string;
    fecha: number;
}

class LibroBasico implements Edicion {
    public id: number | string;
    public editorial;
    public fecha;
    public autor: string;
    public titulo: string;
    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }
}

class LibroTecnico extends Libro {
    public tema: string;
    constructor(autor, titulo, tema) {
        super(autor, titulo);
        this.tema = tema;
    }

    mostrar() {
        console.log(this);
    }
}

const oLibroT = new LibroTecnico('Pepito', 'Angular Facil', 'Programacion');
oLibroT.mostrar();
