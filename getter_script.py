import requests
import os
from dotenv import load_dotenv

load_dotenv()

ACCESS_TOKEN = os.getenv('FIGMA_ACCESS_TOKEN')

# Replace these with your own values
FILE_ID = 'VDxwaNYvUvYjKDGlryqC7f'
FRAME_ID = '1:2'  # This could be the same as FILE_ID if you're targeting the top-level frame

def get_file_nodes():
    """Fetches nodes from a Figma file."""
    headers = {'X-Figma-Token': ACCESS_TOKEN}
    url = f'https://api.figma.com/v1/files/{FILE_ID}/nodes?ids={FRAME_ID}'
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Failed to fetch file nodes. Status Code: {response.status_code}")
        print("Response:", response.text)
        return

    data = response.json()

    try:
        # Correctly access the frame data using the 'nodes' and the correct FRAME_ID
        frame_data = data['nodes'][FRAME_ID]['document']
        # Here, adjust to fetch and process the specific data you're interested in
        print(f"Frame Data: {frame_data}")
    except KeyError as e:
        print(f"A KeyError occurred: {e}")
        print("This may be due to incorrect parsing of the response. Check the structure of the response.")
        print("Partial Response:", response.text)


get_file_nodes()

def get_frame_image():
    """Retrieves an image for a specified frame."""
    headers = {'X-Figma-Token': ACCESS_TOKEN}
    url = f'https://api.figma.com/v1/images/{FILE_ID}?ids={FRAME_ID}&format=png'
    response = requests.get(url, headers=headers)
    images = response.json().get('images', {})
    image_url = images.get(FRAME_ID)
    if image_url:
        print(f"Image URL: {image_url}")
    else:
        print("Image could not be retrieved.")

get_frame_image()

