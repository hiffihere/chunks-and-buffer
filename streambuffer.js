const http= require('http') //import mdule
const fs  = require("fs");

//create server
const server = http.createServer((req,res)=>{
console.log("URL:", req.http,"method",req.method,"header",req.headers);
//response
const url = req.url;
const method = req.method;
if(url==="/"){
    res.write("<html>");
    res.write("<head><title>this is hiffi</title></head>");
    res.write('<body><form action="/file" method="POST" name="msg"><input type="text" name="msg"><button type="submit">submit></button></body>');
    
   return  res.write("</html>");
}
if(url==="/file" && method==="POST"){
    const body=[];
    req.on("data",(chunk)=>{
console.log(chunk);
body.push(chunk)
    })
    //event for bufffer
    req.on("end",()=>{
        const parseBody=Buffer.concat(body).toString();
       
        const message=parseBody.split('=')[1];
        
fs.writeFileSync("userfile.txt",message);
    })
fs.writeFileSync("userfile.txt","hello hiffi here");
res.statusCode=303;
res.setHeader("Location", "/");
return res.end();
}
res.write("<html>");
res.write("<head><title>this is hiffi</title></head>");
res.write("<body>this is code red here</body>");

 res.write("</html>");
});
//listen to server
server.listen(3000);