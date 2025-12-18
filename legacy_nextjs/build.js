const fs = require('fs');
const showdown = require('showdown');

const converter = new showdown.Converter();

// Read the markdown file
const markdown = fs.readFileSync('gd_website.md', 'utf8');

// Split the markdown into sections based on the "SECTION" keyword
const rawSections = markdown.split(/\nSECTION \d:/);

const sections = {};
for (const rawSection of rawSections) {
    const lines = rawSection.split('\n');
    const firstLine = lines.shift().trim();
    if (!firstLine) continue;

    let sectionName = firstLine;
    if (firstLine.includes(':')) {
        sectionName = firstLine.split(':')[0].trim();
    }
    
    let content = '';
    for (const line of lines) {
        if (line.startsWith('Headline:')) {
            content += `<h2>${line.substring(9).trim()}</h2>`;
        } else if (line.startsWith('Text:')) {
            content += `<p>${line.substring(5).trim()}</p>`;
        } else if (line.trim().length > 0) {
            content += line.trim() + '\n';
        }
    }
    sections[sectionName] = converter.makeHtml(content);
}

// Manually add contact section
const contactMatch = markdown.match(/CONTACT\n\nText: ([\s\S]*?)(?=SECTION|Homepage|$)/);
if (contactMatch) {
    sections['CONTACT'] = converter.makeHtml(contactMatch[1]);
}


// Read the template HTML
let template = fs.readFileSync('index.html', 'utf8');

// Replace placeholders with content
template = template.replace('<div class="content-container" id="who-we-are-content"></div>', `<div class="content-container" id="who-we-are-content">${sections['Who We Are']}</div>`);
template = template.replace('<div class="content-container" id="what-we-do-content"></div>', `<div class="content-container" id="what-we-do-content">${sections['What We do - Key Insights for Healthier and productive Animals & Ecosystems']}</div>`);
template = template.replace('<div class="content-container" id="why-it-matters-content"></div>', `<div class="content-container" id="why-it-matters-content">${sections['Why It Matters - Benefits for Our Communities and the kingdom']}</div>`);
template = template.replace('<div class="content-container" id="success-stories-content"></div>', `<div class="content-container" id="success-stories-content">${sections['Success Stories']}</div>`);
template = template.replace('<div class="content-container" id="contact-content"></div>', `<div class="content-container" id="contact-content">${sections['CONTACT']}</div>`);


// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Write the final HTML to the dist directory
fs.writeFileSync('dist/index.html', template);

// Copy CSS and JS to dist
fs.copyFileSync('style.css', 'dist/style.css');
fs.copyFileSync('script.js', 'dist/script.js');

console.log('Website built successfully!');