ALTER TABLE students 
ADD FOREIGN KEY (class_id) REFERENCES classes(id);