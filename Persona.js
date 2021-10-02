class Persona {
  constructor(nombre, edad, familiares) {
    console.log('Se esta ejecutando el constructor...');
    this.nombre = nombre;
    this.edad = edad;
    this.familiares = familiares;
    console.log('this: ', this);
  }
  static saludoCorto = 'Hola';

  saludoCompleto() {
    console.log(`Buenas, yo soy ${this.nombre} y tengo ${this.edad} años`);
  }

  saludoEstatico() {
    console.log(Persona.saludoCorto);
    console.log(this.saludoCorto);
  }
}

// const list = new Array(1,2);
// list.toString();
// list.length;
// console.log(list);

const familiares = ['Pedro', 'Roberto', 'Alberto'];
const persona = new Persona('coder', 25, familiares);
// console.log(persona);
persona.saludoCompleto();
persona.saludoEstatico();
persona.addFamilyMember('Agustin');
const cantidad = persona.countFamily();
const cantidad = persona.addLibro('nuevo libre', 'autor del nuevo libre');

// console.log(Persona.saludoCorto);

const libro = { name: 'coder', author: 'asd' };
const libro2 = { name: 'coder2', author: 'asd'};

const libros = [libro, libro2]