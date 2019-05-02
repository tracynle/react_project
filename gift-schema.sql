-- Drops if it exists currently --
DROP DATABASE IF EXISTS react_project_db;
CREATE DATABASE react_project_db;
USE react_project_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR (40) NOT NULL,
    password VARCHAR (40)  NOT NULL,
    email VARCHAR (40) NOT NULL,
    birthday VARCHAR (40) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (userName, password, email, birthday)
VALUES ("1", "2", "3", "4");

SELECT * FROM users;

CREATE TABLE userLikes ( 
	id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR (40) NOT NULL,
    currency INT NOT NULL,
    description VARCHAR (150) NOT NULL,
    title VARCHAR (40) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO userLikes (category, currency, description, title) 
VALUES ("1", "2", "3", "4");


SELECT * FROM userLikes;

