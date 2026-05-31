const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '../public');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="bg" cx="35%" cy="28%" r="85%">
      <stop offset="0%" stop-color="#241217"/>
      <stop offset="100%" stop-color="#0a0507"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="roseFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="roseStroke" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#e11d48"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="512" height="512" fill="url(#bg)"/>

  <!-- Glow blob -->
  <circle cx="256" cy="256" r="200" fill="url(#glow)"/>

  <!-- Hexagon Outer -->
  <polygon points="256,106 386,181 386,331 256,406 126,331 126,181" 
           fill="url(#roseFill)" stroke="url(#roseStroke)" stroke-width="20" stroke-linejoin="round"/>
</svg>
`;

async function generate() {
  const sizes = [
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg.trim());
  console.log('✅ Gerado: favicon.svg');

  for (const { name, size } of sizes) {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`✅ Gerado: ${name} (${size}x${size})`);
  }
}

generate().catch(console.error);
