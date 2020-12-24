const fs = require("fs");
const file = fs.createWriteStream("./big.csv");

for (let i = 0; i <= 1e10; i++) {
  file.write(
    "Estaba la pájara pinta sentada , porque me da  pero sí, porque te quiero a ti."
  );
}

file.end();