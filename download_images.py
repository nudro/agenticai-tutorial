import os
import requests
from PIL import Image
from io import BytesIO

def download_image(url, filename):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            img.save(filename)
            print(f"Successfully downloaded {filename}")
        else:
            print(f"Failed to download {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {str(e)}")

def main():
    # Create assets directory if it doesn't exist
    if not os.path.exists('assets'):
        os.makedirs('assets')

    # List of images to download
    images = {
        'ai-robot.jpg': 'https://source.unsplash.com/800x600/?robot,ai',
        'tutorial1.jpg': 'https://source.unsplash.com/800x600/?artificial-intelligence',
        'tutorial2.jpg': 'https://source.unsplash.com/800x600/?machine-learning',
        'tutorial3.jpg': 'https://source.unsplash.com/800x600/?technology',
    }

    # Download each image
    for filename, url in images.items():
        filepath = os.path.join('assets', filename)
        download_image(url, filepath)

if __name__ == "__main__":
    main() 