from PIL import Image

def remove_black_background(input_path, output_path, threshold=30):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (R, G, B, A)
        # Check if the pixel is close to black
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # Make it transparent
            new_data.append((item[0], item[1], item[2], 0))
        else:
            # Keep it as is
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    remove_black_background("public/logo.png", "public/logo_transparent.png")
