const fs = require('fs'); 
let data = '- Hello world!';
let dataNext = '- Nice to meet you!';
let dataLast = '- See you later!';
let file = 'data.txt';


fs.writeFile(file, data + '\r\n',  { flags: 'a' }, function(err) {
    if (err) throw err;
  console.log('The file has been saved!');
  });

fs.createWriteStream(file,  { flags: 'a' }).write(dataNext + '\r\n');

fs.appendFile(file, dataLast + '\r\n', (err) => {
  if (err) throw err;
  console.log('The dataNext was appended to file!');
});

 fs.readFile(file, 'utf-8',  function(err, data) {
    if (err) throw err;
    console.log(data);
});