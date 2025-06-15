const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputLogo = path.join(__dirname, '../public/logo.png');
const publicDir = path.join(__dirname, '../public');

async function generateLogos() {
  try {
    // Ensure the logo exists
    if (!fs.existsSync(inputLogo)) {
      console.error('Logo file not found at:', inputLogo);
      return;
    }

    console.log('Generating logos and favicons...');

    // Create directories if they don't exist
    const iconsDir = path.join(publicDir, 'icons');
    if (!fs.existsSync(iconsDir)) {
      fs.mkdirSync(iconsDir, { recursive: true });
    }

    // Logo variations
    const logoSizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 144, name: 'mstile-144x144.png' },
      { size: 150, name: 'mstile-150x150.png' },
      { size: 310, name: 'mstile-310x150.png', width: 310, height: 150 },
      { size: 310, name: 'mstile-310x310.png' },
    ];

    // Generate PNG icons
    for (const logo of logoSizes) {
      const outputPath = path.join(iconsDir, logo.name);
      
      if (logo.width && logo.height) {
        // For rectangular tiles
        await sharp(inputLogo)
          .resize(logo.width, logo.height, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toFile(outputPath);
      } else {
        // For square icons
        await sharp(inputLogo)
          .resize(logo.size, logo.size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toFile(outputPath);
      }
      
      console.log(`✓ Generated ${logo.name}`);
    }

    // Generate ICO favicon
    const faviconIcoPath = path.join(publicDir, 'favicon.ico');
    await sharp(inputLogo)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(faviconIcoPath.replace('.ico', '.png'));
    
    // Convert PNG to ICO (using PNG as ICO for now)
    fs.copyFileSync(faviconIcoPath.replace('.ico', '.png'), faviconIcoPath);
    fs.unlinkSync(faviconIcoPath.replace('.ico', '.png'));
    console.log('✓ Generated favicon.ico');

    // Generate different logo variations for branding
    const brandingSizes = [
      { size: 64, name: 'logo-64.png' },
      { size: 128, name: 'logo-128.png' },
      { size: 256, name: 'logo-256.png' },
      { size: 512, name: 'logo-512.png' },
    ];

    for (const brand of brandingSizes) {
      const outputPath = path.join(publicDir, brand.name);
      await sharp(inputLogo)
        .resize(brand.size, brand.size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated ${brand.name}`);
    }

    // Generate SVG optimized version (if needed)
    console.log('\n🎉 All logos and favicons generated successfully!');
    console.log('📁 Files generated in:');
    console.log('  - /public/icons/ (PWA and favicon icons)');
    console.log('  - /public/ (main logos and favicon)');

  } catch (error) {
    console.error('Error generating logos:', error);
  }
}

generateLogos();
