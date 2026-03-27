from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, schemas
from database import engine, SessionLocal, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Add student
@app.post("/students/")
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    new_student = models.Student(**student.dict())
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

# Get all students
@app.get("/students/")
def get_students(db: Session = Depends(get_db)):
    return db.query(models.Student).all()

# Delete student
@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).get(student_id)
    db.delete(student)
    db.commit()
    return {"message": "Deleted"}

# Update student
@app.put("/students/{student_id}")
def update_student(student_id: int, updated: schemas.StudentCreate, db: Session = Depends(get_db)):
    student = db.query(models.Student).get(student_id)
    student.name = updated.name
    student.email = updated.email
    student.course = updated.course
    db.commit()
    return student
