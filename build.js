var hyperstream = require('hyperstream');
var fs = require('fs');

var hs = hyperstream({
    'style': process.stdin,
})
var rs = fs.createReadStream(__dirname + '/src/index.html')
rs.pipe(hs).pipe(process.stdout)
