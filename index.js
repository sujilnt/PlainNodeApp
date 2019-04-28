/*
 Main file, starting on the App
*/

// Import Core Node Modules 
const {createServer} = require("http");
const url = require("url");


// Creating a server using http.createSever function by passing callback
const server= createServer((request,response)=>{
    //<---- parse the url by inputing the url --->
    const parseUrl = url.parse(request.url,true);
    const pathName = parseUrl.pathname;
    const trimmedpath = pathName.replace(/^\/+| \/+$/g,"")

    // <--- Getting the HTTP Method ---->
    const method =  request.method.toLowerCase();
    //<----- Getting header ------->
    const headers = request.headers;
    // <--- sending the response ---->
    response.end("Hello World");

    // console logging the required information
    console.log("logging Information  parseUrl: \n",parseUrl );
    console.log("path Name : \n ", pathName);
    console.log("trimmed Path: \n", trimmedpath); 
    console.log("request", request.method.toLowerCase()); // accessing method like GET Post 
    console.log("query params", parseUrl.query); 
    console.log("request received  "+ request.rawHeaders, typeof(request.rawHeaders));
    console.log("request received  "+ JSON.stringify(request.headers), typeof(request.headers));
});

// listing th e server and have it listen on port 300 
server.listen(3000, ()=>console.log("The server is listing on the port 3000 now "));

