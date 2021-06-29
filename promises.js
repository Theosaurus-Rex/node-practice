const fs = require('fs').promises

fs.readdir('./')
    .then(fileList => {
        return Promise.all(
            fileList.map(file => fs.readFile(file).then(data => [file, data.length]).catch(err => [file, 0]))
        )
    })
    .then(results => {
        results.forEach(([file, length]) => console.log(`${file}: ${length}`))
        console.log('Done!')
    })