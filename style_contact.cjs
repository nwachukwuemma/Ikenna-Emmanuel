const fs = require('fs');

let content = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

// The main form container
content = content.replace(
  'className="bg-[#111111] border border-[#333333] rounded-2xl p-6 sm:p-8 shadow-xs"',
  'className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"'
);

// The email panel
content = content.replace(
  'className="p-6 rounded-2xl bg-[#111111] border border-[#333333]"',
  'className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"'
);

// The whatsapp panel
content = content.replace(
  'className="p-6 rounded-2xl bg-[#0a1a11] border border-[#163321] relative overflow-hidden group"',
  'className="p-6 rounded-2xl bg-[#0a1a11]/80 backdrop-blur-xl border border-[#163321] relative overflow-hidden group shadow-2xl"'
);

fs.writeFileSync('src/components/ContactSection.tsx', content);
