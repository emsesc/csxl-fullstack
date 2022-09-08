from fastapi import FastAPI
from database import Base, engine, get_db
from schemas import Link
from models import LinkCreate

app = FastAPI()

@app.get("/api/health")
def read_root():
    return "Hello World!"

# class Link:
#     display_name: str
#     url: str

# links : list[Link] = []

@app.post("/api/link")
def create_link(display_name:str, url:str):
    link = Link()
    link.display_name = display_name
    link.url = url
    links.append(link)
    return link

# route that returns list of links created from /api/link
# returns nothing when stateless
@app.get("/api/links")
def get_links():
    return "test"
