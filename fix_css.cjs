const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace('background-color: #f9fafb;', 'background-color: #000000;');
css = css.replace('color: #111827;', 'color: #ffffff;');
css = css.replace('color-scheme: light;', 'color-scheme: dark;');
css = css.replace('background: #f1f5f9;', 'background: #111111;');
css = css.replace('background: #cbd5e1;', 'background: #333333;');
css = css.replace('background: #94a3b8;', 'background: #555555;');
fs.writeFileSync('src/index.css', css);
