const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Read the console capture script
const scriptPath = path.join(__dirname, '..', 'public', 'dashboard-console-capture.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Create inline script tag
const scriptTag = `<script>
${scriptContent}
</script>`;

// Find all HTML files in the build output
const htmlFiles = glob.sync('**/*.html', {
  cwd: path.join(__dirname, '..', '.next'),
  absolute: true
});

console.log(`Found ${htmlFiles.length} HTML files to process`);

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Check if script is already injected
  if (content.includes('console-capture-ready')) {
    console.log(`Skipping ${file} (already has console capture)`);
    return;
  }
  
  // Inject script into <head> section
  if (content.includes('<head>')) {
    content = content.replace(
      '<head>',
      `<head>\n${scriptTag}`
    );
    
    fs.writeFileSync(file, content);
    console.log(`Injected console capture into ${file}`);
  } else {
    console.log(`Warning: No <head> tag found in ${file}`);
  }
});

console.log('Console capture injection complete');