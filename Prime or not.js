let http = require("http");
let lib= require("./primemodule.js")
let isPrime = `<h1>${lib.isPrime(17)}</h1>`;
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(isPrime);
  })
  .listen(3000);
