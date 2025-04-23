from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(filename, text, size=(800, 600), bg_color=(52, 58, 64), text_color=(255, 255, 255)):
    # Create a new image with the specified background color
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    
    # Add text to the image
    text_bbox = draw.textbbox((0, 0), text)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    # Calculate text position (center)
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    
    # Draw the text
    draw.text((x, y), text, fill=text_color)
    
    # Save the image
    img.save(filename)
    print(f"Created {filename}")

def main():
    # Create assets directory if it doesn't exist
    if not os.path.exists('assets'):
        os.makedirs('assets')

    # List of images to create
    images = {
        'ai-robot.jpg': 'AI Robot',
        'tutorial1.jpg': 'Introduction to Agentic AI',
        'tutorial2.jpg': 'Building Autonomous Agents',
        'tutorial3.jpg': 'Multi-Agent Systems'
    }

    # Create each image
    for filename, text in images.items():
        filepath = os.path.join('assets', filename)
        create_placeholder_image(filepath, text)

if __name__ == "__main__":
    main() 