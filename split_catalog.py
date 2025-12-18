import re
import os

def slugify(text):
    return text.lower().strip().replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '')

def clean_pricing(text):
    lines = text.split('\n')
    new_lines = []
    in_pricing_table = False
    
    for line in lines:
        stripped = line.strip()
        
        # Remove list items with SAR
        if re.search(r'^\s*-\s.*SAR', line):
            continue
            
        # Remove specific Price/Minimum order lines (bolded headers)
        if re.search(r'^\*\*(Price|Minimum order)', stripped):
            continue

        # Table processing
        if stripped.startswith('|'):
            # Detect header with Price
            if 'Price' in stripped and 'SAR' in stripped:
                in_pricing_table = True
            
            if in_pricing_table:
                # Remove last column: find last pipe not at end
                # Regex matches | content | at end of line (ignoring trailing whitespace)
                line = re.sub(r'\|[^|]+\|\s*$', '|', line)
        else:
            # If we hit a non-table line (usually empty), reset table mode
            if stripped == "":
                in_pricing_table = False
        
        new_lines.append(line)
        
    return '\n'.join(new_lines)

def parse_catalog():
    source_file = 'service_catalog/technology_services_catalog.md'
    output_dir = 'content/services'
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with open(source_file, 'r') as f:
        content = f.read()

    # Split by major sections (## X. Title)
    sections = re.split(r'(^## \d+\. .+$)', content, flags=re.MULTILINE)

    # _index.md
    with open(f'{output_dir}/_index.md', 'w') as f:
        f.write('---\ntitle: "Service Catalog"\nlayout: "list"\n---\n\nExplore our comprehensive range of genomic and data science services.\n')

    for i in range(1, len(sections), 2):
        header = sections[i].strip()
        body = sections[i+1].strip()
        
        title_match = re.search(r'## \d+\. (.+)', header)
        if title_match:
            title = title_match.group(1)
            filename = slugify(title) + '.md'
            weight = (i // 2) + 1
            
            # Split by ### headers
            subsections = re.split(r'(^### .+$)', body, flags=re.MULTILINE)
            
            new_body = clean_pricing(subsections[0])
            
            for j in range(1, len(subsections), 2):
                sub_header = subsections[j]
                # Apply pricing cleaner to the content of the subsection
                sub_content = clean_pricing(subsections[j+1])
                
                # Wrap in card div
                new_body += f'\n<div class="service-detail-card">\n\n{sub_header}\n{sub_content}\n</div>\n'

            file_content = f"""---
title: "{title}"
weight: {weight}
---

{new_body}
"""
            with open(os.path.join(output_dir, filename), 'w') as f:
                f.write(file_content)
            print(f"Created {filename}")

if __name__ == '__main__':
    parse_catalog()
