DROP DATABASE IF EXISTS popquiz_DB;
CREATE DATABASE popquiz_DB;

USE popquiz_DB;

CREATE TABLE popquiz_tbl(
  id INT NOT NULL AUTO_INCREMENT,
  random_text VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

INSERT INTO popquiz_tbl (random_text)
VALUES ("This");

INSERT INTO popquiz_tbl (random_text)
VALUES ("Quiz");

INSERT INTO popquiz_tbl (random_text)
VALUES ("Is");

INSERT INTO popquiz_tbl (random_text)
VALUES ("Cool");