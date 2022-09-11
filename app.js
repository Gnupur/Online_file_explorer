//require node modules
const http = require('http');

//file imports
const respond = require('./lib/respond.js');

//connection settings
const port = 3089;

//Create server
const server = http.createServer(respond);

//listen to client requests on the specific port, the port should be available
server.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

//This is the project to understand node concepts thoroughly. There are obviously easier ways of building this project using external modules, but that is the purpose of not to miss out many concepts..
