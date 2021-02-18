const fs = require('fs');

const pathName = __dirname;
const pathToMove = __dirname + '/allFiles'

const moveFile = (path) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach(fileName => {
      fs.stat(`${path}/${fileName}`, (err1, stats) => {
        if (err1) {
          console.log(err1);
        }
        if (!stats.isDirectory() && fileName !== 'app.js') {
          fs.rename(`${path}/${fileName}`, `${pathToMove}/${fileName}`, err2 => {
            if (err2) {
              console.log(err2);
            }
          })
        } else moveFile(`${path}/${fileName}`)
      })
    })
  })
}

moveFile(pathName);


