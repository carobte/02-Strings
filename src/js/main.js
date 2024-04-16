/*
// Declaración de strings

const option1 = "Hello world"
const option2 = String("Hello world")
const option3 = new String("Hello world")

console.log(option1)
console.log(option2)
console.log(option3) // String {'Hello world'}

// Extraer datos

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
 */

//Interpolación de cadenas, concatenación de cadenas -> mostrarla en una linea de código pero no une las variables

const message1 = "This is a message to"
const message2 = "practice concatenation"

console.log("option 1 (+):" + message1 + " " + message2)

console.log("option 2 (,):" , message1 , message2)

console.log(`option 3 (\`): ${message1} ${message2}`)

// Variable para crear el componente y escribirlo en el html

const fullName = "Caro Bte"
const header = `
    <header>
        <h1>Hello World, my  name is ${fullName}</h1>
    </header>
`
document.write(header)