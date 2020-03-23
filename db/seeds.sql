CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(40) NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY(id)
);

USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Western Burger", false), ("Classic Cheeseburger", false), ("Colorado Burger", false);createdAt