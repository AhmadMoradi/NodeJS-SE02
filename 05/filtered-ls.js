/*
const fs = require('fs');

const args = process.argv.slice(2);
const [dirPath, fileExt] = args;

fs.readdir(dirPath, 'utf-8', (err, list) => {
    if (!err) {
        list
            .filter(item => item.endsWith(`.${fileExt}`))
            .forEach(item => console.log(item));
        ;
    }
});
*/