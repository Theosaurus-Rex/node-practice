const fs = require('fs')

const filename = 'callbacks-01.js'

fs.readFile(filename, (err, fileData) => {
if (err){
    console.error(err)
} 

console.log(`${filename}: ${fileData.length}`)

})


// Async function means this returns first
// You have no control of the order of callback returns
fs.readdir('./', (err, files) => {
    if (err) console.error(err)

    console.log(files)
})