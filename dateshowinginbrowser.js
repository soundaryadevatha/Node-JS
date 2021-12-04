let http = require("http");
let dateshowinginbrowser = require("./todaydateusingnodejs.js");
http
.createServer(function(request,response){
let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let fullDate = `${day}.${month}.${year}.`;
response.writeHead(200,{"Content-Type":"text/html"});
response.end(`<div>Starting server <br>
	Today date
	<p>${fullDate}</p></div>`)
})
.listen(8080);