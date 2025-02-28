import requests

response = requests.get("https://jsonplaceholder.typicode.com/posts")
if response.status_code == 200:
    posts = response.json()
    print(posts[:5])  # Print first 5 posts
else:
    print("Error fetching data")
