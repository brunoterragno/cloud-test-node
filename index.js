const http = require("http");
const appInsights = require("applicationinsights");

appInsights.setup("db270688-e61c-4de1-8339-c05edc20c0c3");
appInsights.start();

const server = http.createServer((request, response) => {
  const statusCode = request.url.endsWith("error") ? 500 : 200;
  response.writeHead(statusCode, { "Content-Type": "text/plain" });
  response.end("Hello Cloud World! " + statusCode);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
