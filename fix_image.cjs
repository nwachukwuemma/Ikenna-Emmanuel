const fs = require('fs');
const file = 'src/components/ContactSection.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  "url('/marvin-meyer-SYTO3xs06fU-unsplash.jpg')",
  "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')"
);
fs.writeFileSync(file, content);
