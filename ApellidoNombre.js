// definición de clase Usuario y métodos
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }

    getFullName() {
        return (`${this.nombre} ${this.apellido}`);
    }

    addMascota( nuevaPet ) {
        this.mascotas.push( nuevaPet );
    }

    countMascotas() {
        return (this.mascotas.length);
    }

    addBook( newNombre , newAutor ) {
        this.libros.push( {titulo: newNombre, autor: newAutor} );
    }

    getBookNames() {
        const nombreLibros = [];
        this.libros.forEach(function(element) {
            nombreLibros.push(element.titulo);
        });
        return (nombreLibros);        
    }

}


const libro1 = { titulo: "Muerte en el Nilo", autor: "Agatha Christie" };
const libro2 = { titulo: "QB VII", autor: "León Uris" };
const pets = [ "Kimo" , "Magui" , "Kira" , "Viena" ];
const usuario = new Usuario("Roberto", "Fernandez" , [ libro1 , libro2 ] , pets);


console.log("--------------------------------------------------------------------")
console.log(usuario);
console.log("--------------------------------------------------------------------")


// retorna el nombre completo del usuario
console.log(usuario.getFullName());


// recibe un nombre de mascota y lo agrega al array de mascotas
usuario.addMascota("Pepa");


// retorna la cantidad de mascotas que tiene el usuario
const cantidad = usuario.countMascotas();
console.log(cantidad);


// recibe string nombre y string autor, y debe agregar un objeto al array de libros
let nombre = "El ojo del Tigre";
let autor = "Wilbur Smith"
usuario.addBook( nombre , autor );


// retorna un array con solo los nombres del array de libros del usuario
nombreLibros = usuario.getBookNames();
console.log(nombreLibros);


console.log("--------------------------------------------------------------------")
console.log(usuario);
console.log("--------------------------------------------------------------------")

