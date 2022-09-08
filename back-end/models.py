from pydantic import BaseModel

# serialization = transform into bytes to do something when going across the web
class LinkCreate(BaseModel):
    display_name: str
    url: str
    