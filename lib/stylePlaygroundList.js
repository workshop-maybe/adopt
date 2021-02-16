import fs from 'fs'
import path from 'path'
// Node.js imports

const stylePlaygroundDirectory = path.join(process.cwd(), 'pages/styleplayground/')

export function getStylePlaygroundPages() {
    const filenames = fs.readdirSync(stylePlaygroundDirectory)
    return filenames
}