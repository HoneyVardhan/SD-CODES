const http = require('http');  
const os = require('os');      
const path = require('path');   
const EventEmitter = require('events');  
const eventEmitter = new EventEmitter(); 
const port = 3000;  
const hostname = '127.0.0.1';
const filePath = 'Users/johnh/Desktop/hv.txt';
console.log('OS Type:', os.type());  
console.log('OS Platform:', os.platform());  
console.log('OS Architecture:', os.arch()); 
console.log('CPU Cores:', os.cpus().length);
console.log('Current Working Directory:', process.cwd()); 
console.log(`Absolute Path: ${path.resolve(filePath)}`); 
console.log(`Extension: ${path.extname(filePath)}`);
const server = http.createServer((req, res) => {
    res.statusCode = 300;
    res.setHeader('Content-Type', 'text/Bold');
    res.end('The code has been exicuted succesfully!!\n');
});
eventEmitter.on('start', () => {
    console.log('Custom Event Triggered!');
});
eventEmitter.emit('start');
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
