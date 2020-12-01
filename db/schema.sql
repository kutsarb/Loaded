DROP DATABASE IF EXISTS loaded_db;
CREATE DATABASE loaded_db;
USE loaded_db;
CREATE TABLE loads
(
    id int NOT NULL AUTO_INCREMENT,
    broker varchar(255) NOT NULL,
    loadNum varchar(255) NOT NULL,
    puAddress varchar(255) NOT NULL,
    doAddress varchar(255) NOT NULL,
    puDate DATETIME,
    dueDate DATETIME,
    trailer INTEGER(10) NOT NULL,
    active BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
USE loaded_db;
INSERT INTO loads (broker, loadNum, puAddress, doAddress,puDate,dueDate,trailer) VALUE ('TQL', '168449','1234 SMITH ST., CLEVELAND, OH','1234 SMITH ST., CLEVELAND, TN',11/27/1996,11/27/1999,3310)