const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');
let openBraces = 0;
let openParens = 0;
let inString = false;
let stringChar = '';
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  for (let j = 0; j < line.length; j++) {
    let char = line[j];
    
    // Naive string skipping
    if (inString) {
      if (char === stringChar && line[j-1] !== '\\') inString = false;
      continue;
    }
    if (char === '\'' || char === '\"' || char === '\`') {
      inString = true;
      stringChar = char;
      continue;
    }
    // single line comments naive skip
    if (char === '/' && line[j+1] === '/') break;
    
    if (char === '{') {
      openBraces++;
      // console.log(`{ at line ${i+1}`);
    }
    if (char === '}') {
      openBraces--;
      // console.log(`} at line ${i+1}`);
    }
    if (char === '(') openParens++;
    if (char === ')') openParens--;
  }
}
console.log('Open Braces:', openBraces, 'Open Parens:', openParens);
