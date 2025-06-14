-- ACTORS SCHEMA 

DROP TABLE actors;

CREATE TABLE actors(
id INT AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
DOB DATE,
country VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO actors(id,name,DOB,country)
VALUES
	  (1,'Millie Bobby Brown','2004-02-19','Britain'),
	  (2,'Lisa Vicari','1997-02-11','German'),
    (3,'Ty Burrell','1967-08-22','America'),
    (4,'Matt LeBlanc','1967-07-25','America'),
    (5,'Michael Richards','1949-07-24','America'),
    (6,'Kennedy McMann','1996-10-30','America'),
    (7,'Winona Ryder','1971-10-29','America'),
    (8,'Eric Stonestreet','1971-09-09','America'),
    (9,'Antje Traue','1981-01-18','German'),
    (10,'Lisa Kudrow','1963-07-30','America'),
    (11,'Alex Saxon','1987-09-10','America'),
    (12,'Jerry Stiller','1927-06-08','America');