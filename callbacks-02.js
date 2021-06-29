const fs = require('fs')

fs.readdir('./', (err, files) => {
    if (err) console.error(err)

    files.forEach(function (file) {
        fs.readFile(file, (err, data) => {
            if (err) console.error(err)

            console.log(`${file}: ${data.length}`)
        })
    })
})