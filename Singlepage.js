const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);


// respond to the request

  let filePath;

if (req.url === '/' || req.url ==='index.html') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  filePath = path.join(__dirname, 'myfolder', 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    // if (err) throw err;
    res.end(data);
  })
}
});



server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));