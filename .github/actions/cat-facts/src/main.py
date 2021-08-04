import requests
import random
import sys

# Make an HTTP GET request to the cat-fact API
cat_url = "https://catfact.ninja/fact?max_length=100"
r = requests.get(cat_url)
r_obj = r.json()

fact = r_obj["fact"]

# Print the individual randomly returned cat-fact
print(fact)

# Set the fact-output of the action as the value of random_fact
print(f"::set-output name=fact::{fact}")