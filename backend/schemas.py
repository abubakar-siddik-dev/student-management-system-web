from pydantic import BaseModel

class StudentCreate(BaseModel):
    name: str
    email: str
    course: str

class Student(StudentCreate):
    id: int

    class Config:
        orm_mode = True
