#!/usr/bin/env node

/**
 * Script untuk membantu mengupdate komponen yang belum menggunakan skema warna baru
 * 
 * Penggunaan:
 * node scripts/update-colors.js
 */

const fs = require('fs');
const path = require('path');

// Mapping warna lama ke baru
const colorMappings = {
  // Background
  'bg-white': 'bg-bg-secondary',
  'dark:bg-gray-800': 'dark:bg-bg-primary',
  'dark:bg-gray-900': 'dark:bg-bg-primary',
  'bg-gray-100': 'bg-bg-secondary/50',
  'dark:bg-gray-700': 'dark:bg-bg-secondary/10',
  
  // Text
  'text-gray-900': 'text-text-secondary',
  'dark:text-white': 'dark:text-text-primary',
  'text-gray-600': 'text-text-secondary',
  'dark:text-gray-300': 'dark:text-text-primary',
  'text-gray-500': 'text-text-secondary/60',
  'dark:text-gray-400': 'dark:text-text-primary/60',
  'text-gray-700': 'text-text-secondary',
  'dark:text-gray-200': 'dark:text-text-primary',
  
  // Borders
  'border-gray-200': 'border-bg-secondary',
  'dark:border-gray-700': 'dark:border-bg-secondary/20',
  
  // Hover states
  'hover:bg-gray-100': 'hover:bg-bg-secondary/50',
  'dark:hover:bg-gray-700': 'dark:hover:bg-bg-secondary/10',
  
  // Buttons
  'bg-primary': 'bg-cta-primary',
  'text-primary': 'text-cta-primary',
};

// Komponen yang perlu diupdate
const componentsToUpdate = [
  'src/components/auth',
  'src/components/markets',
  'src/components/trade',
  'src/components/wallet',
  'src/components/spot',
  'src/components/futures',
  'src/components/earn',
  'src/components/cards',
  'src/components/p2p',
  'src/components/history',
  'src/components/account',
  'src/components/security',
  'src/components/kyc',
  'src/components/settings',
  'src/components/help',
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Apply color mappings
    for (const [oldColor, newColor] of Object.entries(colorMappings)) {
      if (content.includes(oldColor)) {
        content = content.replace(new RegExp(oldColor, 'g'), newColor);
        updated = true;
      }
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      updateFile(filePath);
    }
  });
}

function main() {
  console.log('🎨 Starting color scheme update...\n');
  
  componentsToUpdate.forEach(componentDir => {
    if (fs.existsSync(componentDir)) {
      console.log(`📁 Processing: ${componentDir}`);
      walkDir(componentDir);
    } else {
      console.log(`⚠️  Directory not found: ${componentDir}`);
    }
  });
  
  console.log('\n✨ Color scheme update completed!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the changes made');
  console.log('2. Test the components in both light and dark modes');
  console.log('3. Update any remaining hardcoded colors manually');
  console.log('4. Check for any broken styling or contrast issues');
}

if (require.main === module) {
  main();
}

module.exports = { updateFile, colorMappings };