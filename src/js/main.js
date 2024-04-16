/*
// # Declaración de strings

const option1 = "Hello world"
const option2 = String("Hello world")
const option3 = new String("Hello world")

console.log(option1)
console.log(option2)
console.log(option3) // String {'Hello world'}


// # Extraer datos

const message = "Testing message"
document.write(message) //escribe en el html

// Cantidad caracteres, si es cubito es metodo y se usan con parentesis, si es como rectangulito es propiedad
console.log(message.length)

// Extrae según posición
console.log(message[1])
console.log(message.charAt(1))

// Extrae según contenido
console.log(message.search("message")) //index, -1 si no está
console.log(message.includes("message")) //boolean

// Pregunta si empieza/termina con algo - distingue mayus
console.log(message.starsWith("Testing")) //boolean
console.log(message.endsWith("message")) //boolean


// # Interpolación de cadenas, concatenación de cadenas -> mostrarla en una linea de código pero no une las variables

const message1 = "This is a message to"
const message2 = "practice concatenation"

console.log("option 1 (+):" + message1 + " " + message2)

console.log("option 2 (,):" , message1 , message2)

console.log(`option 3 (\`): ${message1} ${message2}`)

console.log("option 4 (method concat)", message1.concat(" ", message2)) // concat recibe varios param

// Variable para crear el componente y escribirlo en el html

const fullName = "Caro Bte"
const header = `
    <header>
        <h1>Hello World, my  name is ${fullName}</h1>
    </header>
`
document.write(header)


// # Depuración de strings
const message = "HellO. HoW Are You?"

// Minusculas o mayusculas
document.write(message.toLowerCase())
//document.write(message.toLocaleLowerCase()) // hacen lo mismo. Por convención los datos se guardan en minus

// Quitar espacios

const email = "  caro@gmail.com  "

console.log(email.trim()) // elimina espacios
console.log(email.trimStart()) // solo comienzo
console.log(email.trimEnd()) // solo final

 */

// # Fragmentación

const message = "anita lava la tina porque se porto mal"

console.log(message.substring(0,10)) // solo para str, un solo param es el inicio, el segundo param es excluyente
console.log(message.slice(0,10)) // arrays también

console.log(message.replace(/[aeiou]/g, "p")) //la primera, replaceAll para todas 
// expresión regular /[]/g

