import os
import requests
from PIL import Image
from io import BytesIO
from pathlib import Path

# Create output directory
output_dir = Path('public/logos')
output_dir.mkdir(parents=True, exist_ok=True)

# Image configurations: (filename, url, needs_dark_bg)
images_config = [
    ('python.webp', 'https://avatars.githubusercontent.com/u/1525981?s=200', False),
    ('pytorch.webp', 'https://pytorch.org/assets/images/pytorch-logo.png', True),
    ('tensorflow.webp', 'https://www.tensorflow.org/images/tf_logo_social.png', True),
    ('huggingface.webp', 'https://avatars.githubusercontent.com/u/25720743?s=200', False),
    ('langchain.webp', 'https://avatars.githubusercontent.com/u/126733545?s=200', False),
    ('openai.webp', 'https://avatars.githubusercontent.com/u/14957082?s=200', False),
    ('pinecone.webp', 'https://avatars.githubusercontent.com/u/54333248?s=200', False),
    ('chromadb.webp', 'https://avatars.githubusercontent.com/u/107595827?s=200', False),
    ('fastapi.webp', 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png', True),
    ('docker.webp', 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', False),
    ('langgraph.webp', 'https://avatars.githubusercontent.com/u/126733545?s=200', False),
    ('aws.webp', 'https://avatars.githubusercontent.com/u/2232217?s=200', False),
    ('git.webp', 'https://avatars.githubusercontent.com/u/18133?s=200', False),
    ('jupyter.webp', 'https://avatars.githubusercontent.com/u/7388996?s=200', False),
]

def process_image(filename, url, needs_dark_bg):
    try:
        print(f'⏳ Processing {filename}...')
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        response = requests.get(url, timeout=15, headers=headers)
        response.raise_for_status()

        img = Image.open(BytesIO(response.content)).convert('RGBA')

        size = 200
        canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        img.thumbnail((size - 20, size - 20), Image.Resampling.LANCZOS)
        offset = ((size - img.width) // 2, (size - img.height) // 2)
        canvas.paste(img, offset, img if img.mode == 'RGBA' else None)

        if needs_dark_bg:
            bg = Image.new('RGB', (size, size), (20, 20, 20))
            bg.paste(canvas, (0, 0), canvas)
            canvas = bg.convert('RGBA')

        output_path = output_dir / filename
        canvas.save(str(output_path), 'WEBP', quality=95)
        print(f'✅ Saved: {output_path}')
        return True
    except Exception as e:
        print(f'❌ Error processing {filename}: {str(e)}')
        return False

print("Starting logo downloads and conversions...\n")
successful = sum(process_image(filename, url, needs_bg) for filename, url, needs_bg in images_config)
print(f"\n✓ Complete! Processed {successful}/{len(images_config)} images")
print(f"Output: {output_dir.absolute()}/")
