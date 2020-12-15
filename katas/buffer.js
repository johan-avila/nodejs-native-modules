// let buf1 = Buffer.from('a');
// let buf2 = Buffer.from('b');
// let x = Buffer.compare(buf1, buf2);
// console.log(x);

// let buf3 = Buffer.from('a');
// let buf4 = Buffer.from('b');
// let y = Buffer.compare(buf3, buf4);
// console.log(y);

// let buf5 = Buffer.from('b');
// let buf6 = Buffer.from('a');
// let z = Buffer.compare(buf5, buf6);
// console.log(z);

// console.log("______________________");


const buf1 = Buffer.from("Hola mundo!")
const buf2 = Buffer.from("Hola mundo!!!")

const comp = Buffer.compare(buf1, buf2)

if (comp < 0) {
    const json = buf1.toJSON()
    console.log(json);
} else {
    const json = buf2.toJSON(buf2)
    console.log(json);

}