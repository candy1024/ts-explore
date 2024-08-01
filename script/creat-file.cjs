const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../src/ts/ts-training');

fs.readdir(filePath, (err, files) => {
    if (err) {
        return console.log('Error in read path');
    }

    let indexOfFile = 1;
    files.forEach((fileName) => {
        if (fileName.includes('training')) {
            indexOfFile++;
        }
    })

    const fileName = `training${indexOfFile < 10 ? '0' : ''}${indexOfFile}.ts`;
    const creatPath = `${filePath}/${fileName}`;

    fs.writeFile(creatPath, '// the template', (err) => {
        if (err) {
            console.log('Error in creat file:', err);
        }
        console.log('Creat success !!!');
    })
})