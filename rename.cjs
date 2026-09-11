const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Hero.tsx',
  'src/components/Navbar.tsx',
  'src/components/ContactSection.tsx',
  'src/components/FeedbackTab.tsx',
  'src/utils/resumeDownload.ts',
  'src/data/initialData.ts'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace full name
  content = content.replace(/Emmanuel Nwachukwu/g, 'Ikenna Emmanuel');
  content = content.replace(/Emmanuel_Nwachukwu/g, 'Ikenna_Emmanuel');
  
  // Replace just Emmanuel (except where we already have Ikenna Emmanuel)
  // To avoid "Ikenna Ikenna", we should temporarily hide "Ikenna Emmanuel"
  content = content.replace(/Ikenna Emmanuel/g, '@@IKENNA_EMMANUEL@@');
  
  // We already replaced EMMANUEL NWACHUKWU in Navbar/Footer manually.
  content = content.replace(/Hire Emmanuel/g, 'Hire Ikenna');
  content = content.replace(/Hello Emmanuel/g, 'Hello Ikenna');
  content = content.replace(/for Emmanuel/g, 'for Ikenna');
  content = content.replace(/Emmanuel's/g, "Ikenna's");
  content = content.replace(/Reach Emmanuel/g, 'Reach Ikenna');
  
  content = content.replace(/@@IKENNA_EMMANUEL@@/g, 'Ikenna Emmanuel');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated names in ${file}`);
});
