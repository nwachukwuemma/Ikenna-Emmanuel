const fs = require('fs');
let ts = fs.readFileSync('src/components/TechSkills.tsx', 'utf8');
ts = ts.replace(/to-\[\#1a1a1a\]\/95/g, 'to-black/95');
fs.writeFileSync('src/components/TechSkills.tsx', ts);
