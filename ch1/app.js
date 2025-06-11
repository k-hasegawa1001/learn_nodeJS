const http = require("http");
const fs = require("fs");
const url = require("url");

const html = fs.readFileSync("./index.html", "UTF-8");

var server = http.createServer((req, res) => {
  const address = url.parse(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  switch (address.pathname) {
    case "/":
      res.write(html);
      break;
    default:
      res.write(`
            <html>
                <body>
                    <h1>No PAGE.</h1>
                </body>
            </html>
            `);
  }
  res.end();
});

server.listen(3000);
console.log("start server http://localhost:3000/");
