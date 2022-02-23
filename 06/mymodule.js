/*
const fs = require('fs');

function dirFilter(dirPath, fileExt, callback) {
    fs.readdir(dirPath, 'utf-8', (err, list) => {
        if (!err) {
            const result = list
                .filter(item => item.endsWith(`.${fileExt}`));
            callback(null, result);
        } else {
            callback(err);
        }
    });
}

module.exports = dirFilter;
*/