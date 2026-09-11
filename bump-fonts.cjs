const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'Hero.tsx',
  'TechSkills.tsx',
  'Experience.tsx',
  'Portfolio.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, 'src/components', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // We are going to aggressively bump up text sizes for readability
  
  // text-sm -> text-base (we must replace \btext-sm\b so it doesn't break things, but we do this carefully)
  // Let's just bump the standard sizes:
  content = content.replace(/\btext-base\b/g, 'text-lg');
  content = content.replace(/\btext-sm\b/g, 'text-base');
  content = content.replace(/\btext-xs\b/g, 'text-sm');
  
  // Bump up microscopic custom sizes
  content = content.replace(/text-\[11px\]/g, 'text-sm');
  content = content.replace(/text-\[10px\]/g, 'text-xs');
  
  // Also bump up grays to be brighter (sharper against black)
  content = content.replace(/\btext-gray-500\b/g, 'text-gray-400');
  content = content.replace(/\btext-gray-400\b/g, 'text-gray-300');
  content = content.replace(/\btext-gray-300\b/g, 'text-gray-200');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated fonts in ${file}`);
});
