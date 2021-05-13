// Variables y constantes


/**
 * En React ya no debemos usar 'var' para declarar 
 * variables ni en el js moderno.
 */

 const name = "Alan React Dev";
 let lastname = "Vargas";
 
 // Template Strings =====================
 
 const nombre = "Alan";
 const apellido = "Vargas"
 
 const fullname = nombre + apellido // Sin template string
 const fullnameTs = `${ nombre } ${ apellido }` // Con template string
 
 function getSecondLastname() {
     return "Hernández"
 }
 
 const fullnameTs2 = `Mi nombre es ${ fullnameTs } ${ getSecondLastname() }`;
 console.log("Template String: ", fullnameTs2);
 
 // Objetos literales ===================
 
 const obj = {
 
     llave: "valor",
     nombre: "Alan",
     edad: 24,
 
 }
 
 const copy = { ...obj } // Sintaxis Spread
 copy.nombre = "Juan";
 
 console.log("ObjLit: ", obj);
 console.log("ObjLitCopia: ", copy);
 
 /**
  * La sinstaxis spread se ocupa para crear una copia de un objeto, en este caso
  * del objeto 'obj', pues si lo hiciéramos con una igualacion no tendríamos
  * una copia, sino una referencia en memoria por lo que afectaríamos también al obj
  * cuando modifiquemos 'copy'. Ej:
  * 
  * const copy = obj; <- Esto está mal
  */
 
 // Arreglos =====================
 
 const arr = [1,2,3,4];
 let arr2 = [...arr, 5]; // Spread también se puede ocupar para copiar arreglos.
 const arr3 = arr2.map( function(x) {
     return x * 2
 })
 
 console.log("arr: ", arr);
 console.log("arr2: ", arr2);
 console.log("arr3: ", arr3);
 
 // Funciones ======================
 
 // Usamos const para declarar una función
 const myFunc = function(name) {
     return `Hola ${ name }`;
 }
 
 // ||
 
 const arrowFunc = ( name ) => `Hola ${ name }`;
 
 // Desestructuración de objetos
 
 const myObj = {
     name: "Alan",
     age: 24,
     lastname: "Vargas"
 }
 
 const { name: nombreFromObj, age } = myObj
 console.log( "Obj properties from consts: ", nombreFromObj, " && ", age );
 
 const getName = ({ name }) => {
     return `Hola ${ name }`
 }
 
 console.log( getName( myObj ) );
 
 // Promesas
 
 const promise = new Promise( (resolve, reject) => {
 
     setTimeout( () => {
         console.log("TimeOut dentro de la promesa")
         resolve( 10 ); // Resolve puede recibir un argumento para pasarlo al then();
     }, 2000)
 
 });
 
 promise.then( (arg) => console.log("Then de la promesa: ", arg) )
 .catch( () => console.error("REJECT DE LA PROMESA") )
 