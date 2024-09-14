import fs from 'fs'
import path from 'path'

let dataFile=path.join(process.cwd(),'static','data','data.json')

fs.readFile