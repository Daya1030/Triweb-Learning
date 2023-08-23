CREATE TABLE Classes(
id int AUTO_INCREMENT NOT NULL,
class_name VARCHAR(50) NOT NULL,
teacher_id int(11) NOT null,
PRIMARY KEY (id),
FOREIGN KEY (teacher_id) REFERENCES teachers (id)
);