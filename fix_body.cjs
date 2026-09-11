const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('bg-[#0a0a0a]', 'bg-black');
fs.writeFileSync('index.html', html);
