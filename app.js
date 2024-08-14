const http = require("http");
http
  .createServer((request, response) => {
    response.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);
