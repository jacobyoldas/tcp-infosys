DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Everytime", "Big K.R.I.T", "Rap"),
("Gbona", "Burna Boy", "Afro Beats"),
 ("Magic Hour", "Jhene Aiko", "R&B"),
 ("Roll Some Mo", "Lucky Daye", "R&B");