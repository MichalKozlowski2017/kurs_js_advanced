import http from 'http'
import fs from 'fs'


const fsp = fs.promises;



const server = http.createServer((request,response) => {
  
  if(request.url === '/cars') {
    if(request.method === 'GET') {
     return fsp.readFile('./data/cars.json')
      .then(jsonFile => {
        response.writeHead(200, {contentType: "application/json"});
        response.write((jsonFile))
        return response.end();
      })
      .catch(error => {
        console.error('file dosent exists', error)
        response.writeHead(200, {contentType: "application/json"});
        response.write(JSON.stringify({message: error}))
        return response.end();
      })
    }
  }

  response.writeHead(404, {contentType: "application/json"});
  response.write(JSON.stringify({message: "Not Found"}))
  return response.end();

})


server.listen(3005);

console.log('server is running at 3005')

