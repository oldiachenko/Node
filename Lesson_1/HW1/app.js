const fs = require('fs');

const pathName = __dirname;

fs.readdir(`${pathName}`, (error, dirs) => {
  if (error) {
    console.log(error);
    return;
  }
  dirs.forEach(dirName => {
    fs.stat(dirName, (err, stats) => {
      if (err) {
        console.log(err);
    } else if (stats.isDirectory()) {
        fs.readdir(`${pathName}/${dirName}`, (err1, files) => {
          if (err1) {
            console.log(err1);
            return;
          }
          files.forEach(fileName => {
            if(fileName.includes('json')) {
              fs.readFile(`${pathName}/${dirName}/${fileName}`, (err2, data) => {
                if (err2) {
                  console.log(err2);
                  return;
                }
                if(data.includes("female")) {
                  fs.rename(`${pathName}/${dirName}/${fileName}`, `${pathName}/2000/${fileName}`, err3 => {
                    if (err3) {
                      console.log(err3)
                    }
                  })
                } else {
                  fs.rename(`${pathName}/${dirName}/${fileName}`, `${pathName}/1800/${fileName}`, err4 => {
                    if (err4) {
                      console.log(err4)
                    }
                  })
                }
              })
            }
          })
        })
      }
    })
  })
})
