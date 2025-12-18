import re
import os

def slugify(text):
    return text.lower().strip().replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '')

def parse_catalog():
    source_file = 'service_catalog/technology_services_catalog.md'
    output_dir = 'content/services'
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with open(source_file, 'r') as f:
        content = f.read()

    # Split by major sections (## X. Title)
    # The regex looks for ## followed by a number, a dot, and the title
    sections = re.split(r'(^## \d+\. .+$)', content, flags=re.MULTILINE)

    # sections[0] is intro (ignore or put in _index.md)
    # sections[1] is header1, sections[2] is content1, etc.
    
    # Create _index.md for the services section
    with open(f'{output_dir}/_index.md', 'w') as f:
        f.write('---\ntitle: "Service Catalog"\nlayout: "list"\n---\n\nExplore our comprehensive range of genomic and data science services.\n')

    for i in range(1, len(sections), 2):
        header = sections[i].strip()
        body = sections[i+1].strip()
        
        # Extract title "DNA Sequencing Services" from "## 1. DNA Sequencing Services"
        title_match = re.search(r'## \d+\. (.+)', header)
        if title_match:
            title = title_match.group(1)
            filename = slugify(title) + '.md'
            weight = (i // 2) + 1
            
            file_content = f"""---
title: "{title}"
weight: {weight}
---

{body}
"""
            with open(os.path.join(output_dir, filename), 'w') as f:
                f.write(file_content)
            print(f"Created {filename}")

if __name__ == '__main__':
    parse_catalog()
