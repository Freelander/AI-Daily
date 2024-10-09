import os
from datetime import datetime

def add_header_to_md(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Check if the file already has the required header
    if content.startswith('---\ntitle:'):
        print(f"File {file_path} already has a header. Skipping.")
        return

    # Extract date from filename
    filename = os.path.basename(file_path)
    date_str = filename.split('.')[0]
    date_obj = datetime.strptime(date_str, '%m-%d')
    
    # Format the date for the header
    english_date = date_obj.strftime('%B %d')  # This will give "October 09" format
    iso_date = f"2024-{date_obj.month:02d}-{date_obj.day:02d}"

    # Create the header
    header = f"""---
title: {english_date}
date: {iso_date}
cover: https://oss.justin3go.com/blogs/fav0-001.jpg
---

"""

    # Add the header to the content
    updated_content = header + content

    # Write the updated content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

    print(f"Added header to {file_path}")

def process_md_files(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith('.md'):
            file_path = os.path.join(folder_path, filename)
            add_header_to_md(file_path)

# Usage
folder_path = 'docs/en/posts/2024/'  # Replace with your actual folder path
process_md_files(folder_path)