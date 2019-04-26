/*
 Main file, starting on the App
*/

// Import Core Node Modules 
const {createServer} = require("http");


// Creating a server using http.createSever function by passing callback

const server= createServer((request,response)=>response.end("Hello World"));

// listing the server and have it listen on port 300 
server.listen(3000, ()=>console.log("The server is listing on the port 3000 now "));