// SERVIDOR EXPRESS

// 1)Realizar un proyecto de servidor basado en node.js que utilice el módulo express e
// implemente los siguientes endpoints en el puerto 8080:
//      a) Ruta get '/productos´que devuelva un array con todos los productos disponibles
//      en el servidor.
//      b) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre
//      todos los productos disponibles.
// 2)Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del
// desafío anterior para acceder a los datos persistidos del servidor.

// Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos
// como en el ejemplo del desafío anterior.


const fs = require('fs')
const express = require('express')

const app = express()

class Contenedor {
    constructor (nameArchivo){
        this.rutaFile = nameArchivo
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
}

function getAleatorio(cantidadProductos) {
    // math nos da aleatorios entre 0 y 1
    // se generan números aleatorios del 0 hasta cantidadProductos.
    return parseInt(Math.random() * cantidadProductos)
}

const db = new Contenedor('productos.txt')

const traerProductos = async () => {
    arrayProductos = await db.getAll()
}

traerProductos()


// caso A
app.get('/productos',(req, res) => {
    res.send( arrayProductos )
})

// caso B
app.get('/productoRandom',(req, res) => {
    let cualId = getAleatorio(arrayProductos.length)
    res.send( arrayProductos[cualId] )
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor Express escuchando el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
