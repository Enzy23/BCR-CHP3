// console.log("Implement servermu disini yak 😝!");
const http = require('http');
const PORT = 8000;

//Request handler
function onRequest(req, res) {
  res.writeHead(200);
  res.end('Halo, this is from server!');
}

const server = http.createServer(onRequest);

server.listen(PORT, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan dibuka http://127.0.0.1:%d", PORT);
})
