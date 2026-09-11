const fs = require('fs');

let content = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

const target = `<section id="contact" className="py-16 md:py-20 bg-[#1a1a1a] border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">`;

const replacement = `<section id="contact" className="relative py-16 md:py-20 border-b border-[#111111] bg-black overflow-hidden">
      {/* Netflix-style Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity" 
          style={{ backgroundImage: "url('/marvin-meyer-SYTO3xs06fU-unsplash.jpg')" }}
        />
        {/* Gradients to blend the image perfectly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">`;

content = content.replace(target, replacement);

fs.writeFileSync('src/components/ContactSection.tsx', content);
