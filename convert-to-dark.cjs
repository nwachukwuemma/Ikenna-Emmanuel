const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /bg-white/g, to: 'bg-[#111111]' },
  { from: /bg-gray-50/g, to: 'bg-[#1a1a1a]' },
  { from: /bg-gray-100/g, to: 'bg-[#222222]' },
  { from: /text-gray-900/g, to: 'text-white' },
  { from: /text-gray-800/g, to: 'text-gray-200' },
  { from: /text-gray-700/g, to: 'text-gray-300' },
  { from: /text-gray-600/g, to: 'text-gray-400' },
  { from: /text-gray-500/g, to: 'text-gray-500' },
  { from: /border-gray-200/g, to: 'border-[#333333]' },
  { from: /border-gray-300/g, to: 'border-[#444444]' },
  { from: /bg-blue-50/g, to: 'bg-blue-900\/20' },
  { from: /border-blue-200/g, to: 'border-blue-800\/30' },
  { from: /bg-emerald-50/g, to: 'bg-emerald-900\/20' },
  { from: /border-emerald-200/g, to: 'border-emerald-800\/30' },
  { from: /text-blue-800/g, to: 'text-blue-300' },
  { from: /text-emerald-800/g, to: 'text-emerald-300' },
];

files.forEach(file => {
  if (file === 'DoodleBackground.tsx') return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  
  fs.writeFileSync(filePath, content);
});

// Also update index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/bg-\[#f9fafb\]/g, 'bg-[#0a0a0a]');
indexContent = indexContent.replace(/text-\[#111827\]/g, 'text-gray-200');
fs.writeFileSync('index.html', indexContent);

