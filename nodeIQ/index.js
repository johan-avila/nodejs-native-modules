const fs = require("fs")
const { exec,spawn } = require("child_process")

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
/* 8 */
//ESTOS EJERCICIOS DEBEN SER DE EVENT EMITER PETICIONES HTTP
/* 9 */
/* 10 */
/* 11 */
/* 12 */
/* 13 */
/* 14 */
/* 15 */