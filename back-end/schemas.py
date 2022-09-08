from sqlalchemy import Column, Integer, VARCHAR
from database import Base

class Link(Base):
    __tablename__ = "links"

    # handles ORM for you
    id = Column(Integer, primary_key=True, index=True)
    # index = optimizations
    display_name = Column(VARCHAR(256), index=True)
    url = Column(VARCHAR(2083), index=True)