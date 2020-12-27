const fs = require("fs")
const { exec,spawn } = require("child_process")
const EventEmitter = require('events');

/* 1 */
// fs.readFile(`${__dirname}/files/hola.txt`,(err, data)=>{
//     console.log(err|| data.toString());
// })

/* 2 */
// fs.writeFile(`${__dirname}/files/escrito.txt`, "Hola mundo", (err, data)=>{
//     console.log(err);
// })

/* 3 */
// fs.appendFile(`${__dirname}/files/hola.txt`, 'escrito sin borrar lo anterior', (err) => {
//     console.log("err_____________");
//     if (err) throw err;

//     console.log('Escrito correctamente');
// });

/* 4 */
// process.on("exit", ()=>{
//     console.log("exit bb");
//     process.exit()
// })

// process.on("uncaughtException", (err,otro)=>{
//     console.log("olvidos "+err);
// })
// process.on("uncaughtRejection",(err, otro)=>{
//     console.log(err);
//     console.log(otro);
// })
// noSoyReal()

// console.log("Recoger el error para capturarlo____");

/* 5 */
// exec("touch files/soyNuevo.js", (err, stdout, sterr)=>{

//     console.log(err);
//     console.log(stdout);
//     console.log(sterr);
// })
// exec("rm soyNuevo.js", (err, stdout, sterr)=>{
//     console.log(err);
//     console.log(stdout);
//     console.log(sterr);
// })

/* 6 */
// const file = fs.createWriteStream("./files/big.csv");

// for (let i = 0; i <= 1e6; i++) {
//   file.write(
//     "Hola soy un Stream"
//   );
// }

// file.end( e => console.log(e));

/* 7 */
// fs.rename(`${__dirname}/files/hola.txt`, `${__dirname}/files/renombrado.js`, function(err) {
//      console.log( err);
// });
//ESTOS EJERCICIOS DEBEN SER DE EVENT EMITER PETICIONES HTTP

/* 8 */
class MyEmmiter extends EventEmitter{}

const myEmmiter = new MyEmmiter()

myEmmiter.on("mievento", () => {
    console.log("Mi evento 👽");
});
myEmmiter.on("nuevoEvento", () => {
    console.log("Mi NUEVO evento 🎃");
});

myEmmiter.emit("nuevoEvento");
console.log("7+5", 7+5);
myEmmiter.emit("mievento");

/* 9 */ //Este operador es experimental
// let name = (name)=> name 
// let saludo = (name) => {
//     console.log(`Hola ${name}!!!`);
// } 
// name("Johan") > saludo()
// const double = (n) => n * 2;
// const increment = (n) => n + 1;
// // sin operador pipeline
// double(increment(double(double(5)))); // 42
// // con operador pipeline
// 5 |> double |> double |> increment |> double; // 42

/* 10 */
/* 11 */
/* 12 */
/* 13 */
/* 14 */
/* 15 */