const http = require("http");
const appInsights = require("applicationinsights");

appInsights.setup("db270688-e61c-4de1-8339-c05edc20c0c3");
appInsights.start();

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello Cloud World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
