import express from 'express';
import fs from 'fs';

const fsp = fs.promises;

const app = express();

app.get('/', (req, res) => {

  // fs.readFile('./data/hello.txt', 'utf8', (error, data) => {
  //   if(error) {
  //     console.log(error);
  //     return
  //   }
  //   console.log(data)
  //   fs.writeFile('./data/hello2.txt', data, 'utf8', (error2, data2) => {
  //     if(error2) {
  //       console.log(error2);
  //       return
  //     }

  //     console.log('succes!');
  //   })
  // })


  fsp.readFile('./data/hello.txt', 'utf8')
    .then((file) => fsp.writeFile('./data/hello2.txt', file, 'utf8'))
    .then((resultFromPreviousPromise) => {
      console.log('success!!')
    })
    .catch((error) => console.error(error))
  
  res.send('<h1>Hello World!</h1>');
});

app.listen(5000, () => {
  console.log('app is running on port 5000');
});
