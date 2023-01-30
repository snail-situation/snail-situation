const hyperstream = require('hyperstream')
const { mkdirp } = require('mkdirp')
const fs = require('fs')
var marked = require('marked')

//
// build /index.html
//   css is piped to stdin
//
const hs = hyperstream({
    'style': process.stdin,
})
const rs = fs.createReadStream(__dirname + '/src/index.html')
rs.pipe(hs).pipe(process.stdout)

//
// build sub paths
//   - /hermes
//
fs.readFile(__dirname + '/src/hermes.md', 'utf8', (err, file) => {
    if (err) throw err
    const content = marked.parse(file)

    const hs = hyperstream({
        'head': {
            _appendHtml: `<link rel="stylesheet" href="/hermes.css">`
        },
        'title': 'snail situation | hermes',
        'body': {
            _appendHtml: `<div id="content">${content}</div>`
        }
    })
    mkdirp.sync(__dirname + '/public/hermes')
    const ws = fs.createWriteStream(__dirname + '/public/hermes/index.html')

    // read an index.html template
    fs.createReadStream(__dirname + '/src/_index.html')
        .pipe(hs)
        .pipe(ws)
})
