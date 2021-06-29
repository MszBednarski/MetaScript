var fs = require("fs"),
    path = require("path"),
    MetaScript = require(path.join(__dirname, "..", "MetaScript.js"));

var filename = path.join(__dirname, "demo.scilla");
var source = fs.readFileSync(filename),
    program = MetaScript.compile(source);

console.log("--PROGRAM--");
console.log(program);

source = MetaScript.transform(source, filename, { WHAT: true });

var outName = path.join(__dirname, "testOut.scilla");

fs.writeFileSync(outName, source)

console.log("--TRANSFORM--");
console.log(source);
