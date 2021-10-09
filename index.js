
// Usando fs con promesas

// El programa debe tener la clase Contenedor que reciba el nombre del archivo a manipular
// El formato de cada objeto a trabajar será con información de un producto:
// { title: String, price: Number, thumbnail: url, id: Number }
// La clase tiene los siguientes métodos:

// saveProducto(producto): - Recibe un producto, lo guarda en el archivo, devuelve el title y el id asignado del producto.
// getById(id): - Recibe un id y devuelve el producto con ese id, o null si no está.
// getAll(): - Devuelve un arreglo con los productos presentes en el archivo.
// deleteById(id): - Elimina del archivo el producto con el id pasado como parámetro.
// deleteAll(): - Elimina todos los productos presentes en el archivo.

// Test para probar que funciona

const fs = require('fs')


class Contenedor {
    constructor (nameArchivo){
        this.rutaFile = nameArchivo
    }


    saveProducto = async producto => {
        const arrayProductos = await this.getAll()
        if (arrayProductos.length === 0) {
            producto.id = 1
        } else {
            producto.id = arrayProductos.length + 1
        }
        let posicion = arrayProductos.length
        arrayProductos.push(producto)
        try {
            await fs.promises.writeFile(this.rutaFile, JSON.stringify(arrayProductos, null, 2))
            return JSON.stringify(('Producto: '+arrayProductos[posicion].title+' - id asignado: '+arrayProductos[posicion].id), null, 2)
        } catch (error) {
            throw new Error('No se pudo guardar')
        }
    }


    getById = async id => {
        const arrayProductos = await this.getAll()
        let productoBuscado = arrayProductos.find( p => p.id  === id)
        if (productoBuscado === undefined) {
            productoBuscado = null
        }
        return productoBuscado
    }


    getAll = async () => {
        try {
            const contenido = await fs.promises.readFile(this.rutaFile, 'utf-8')           
            return JSON.parse(contenido)
        } catch (error) {
            await fs.promises.writeFile(this.rutaFile, JSON.stringify([], null, 2))
            const contenido = await fs.promises.readFile(this.rutaFile, 'utf-8')
            return JSON.parse(contenido)
        }
    }


    deleteById = async id => {
        const arrayProductos = await this.getAll()
        const nuevoArray = arrayProductos.filter(p => p.id !== id)
        try {
            await fs.promises.writeFile(this.rutaFile, JSON.stringify(nuevoArray, null, 2))
        } catch (error) {
            throw new Error('No se pudo actualizar', error)
        }
    }


    deleteAll = async () => {
        return await fs.promises.writeFile(this.rutaFile, JSON.stringify([], null, 2))
    }


    obtenerPorTitle = async title => {
        const arrayProductos = await this.getAll()
        const productoBuscado = arrayProductos.find( p => p.title.toUpperCase() === title.toUpperCase())
        return productoBuscado
    }


    borrarPorTitle = async title => {
        const arrayProductos = await this.getAll()
        //filter devuelve un nuevo arreglo con todos los elementos del arreglo que cumplan con la condición
        //En este caso, devuelve un arreglo con los objetos que en el valor de su llave title
        //no matcheen con el title ingresado por parámetro. 
        const nuevoArray = arrayProductos.filter(p => p.title !== title)
        try {
            await fs.promises.writeFile(this.rutaFile, JSON.stringify(nuevoArray, null, 2))
        } catch (error) {
            throw new Error('No se pudo actualizar', error)
        }
    }

}


const db = new Contenedor('productos')
const test = async () => {

    // 1 - ok
    // console.log( await db.saveProducto({ title: 'Escuadra', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png', id: 0}))
    // console.log( await db.saveProducto({ title: 'Calculadora', price: 234.56, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png', id: 0 }))
    // console.log( await db.saveProducto({ title: 'Globo Terráqueo', price: 345.67, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geography-planet-school-256.png', id: 0 }))

    // 2 - ok
    // console.log( await db.getById(5))

    // 3 - ok
    // console.log( await db.getAll())

    // 4 - ok
    // console.log( await db.deleteById(2))
  
    // 5 - ok
    // await db.deleteAll()
    


    // console.log( await db.obtenerPorNombre('Escuadra'))
    // console.log( await db.borrarPorNombre('Escuadra'))
}
test()