from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_DATABASE_URL = "sqlite:///./database.db"

# establishing connection between fastapi and sql database
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# session = a phone call/series of communications between server and client
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
        # you may fail when you connect to the database
    finally:
        db.close()
        # close it whether or not it works

# schemas are structures of dbs
# orm (object relational mapping) mapping a programming object to rows