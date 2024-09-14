import fs from 'fs'
let data = fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) throw err
    fs.writeFile('xyz.txt', data, (err) => {
        if (err) throw err
        console.log("New file is created")
    })
})