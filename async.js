const fs = require('fs').promises

printLengths('./')

async function printLengths(dir) {
    const fileList = await fs.readdir(dir)
    const results = await Promise.all(
        // fileList.map(file => fs.readFile(file).then(data => [file, data.length]).catch(err => [file, 0]))
        fileList.map(async file => {
            try {
                let data = await fs.readFile(file)
                return [file, data.length]
            } catch( err) {
                return [file, 0]
            }
            
        })
    )

    results.forEach(([file, length]) => console.log(`${file}: ${length}`))
    console.log('Done!')
}