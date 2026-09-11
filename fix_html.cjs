const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/Emmanuel Nwachukwu/g, 'Ikenna Emmanuel');
fs.writeFileSync('index.html', html);
