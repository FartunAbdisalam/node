// const math = require('./math');
// console.log(math.add(10,5));
// console.log(math.sub(10,5));

const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try{
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8');
    // console.log(data);
    console.log("data read complete"); 

    await fsPromise.appendFile(path.join(__dirname,'files','reply.txt'), `\n\n${data}`);
    console.log("data appending complete");
  }
  catch(err){
    console.log(err);
  }
}

fileOps();

/*fs.readFile(path.join(__dirname, 'files', 'starter.txt'),(err, data) => {
  if (err) throw err;
  console.log(data.toString());
})
  */

/*fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello dear, nice meeting you', err => {
  if (err) throw err;
  console.log("writing completed")
}) */



// fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nLets see if we can add something here', err => {
//   if (err) throw err;
//   console.log("append completed")
// })