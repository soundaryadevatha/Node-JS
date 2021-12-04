let http = require("http");
let registerform = require("./registerform.js");
http
.createServer(function(request,response)
{
response.writeHead(200,{"Content-Type":"text/html"});
response.end(`<div>Register form
<label>Enter Name</label><br>
<input type="text" name="name" id="name"><br>
<label>Enter Password</label><br>
<input type="Password" name="Password" id="Password"><br>
<button onclick=validate()>Login</button>
</div>`)
})
.listen(3000);
