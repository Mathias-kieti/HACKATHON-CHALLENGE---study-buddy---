CREATE DATABASE flashcard; -- create a database

USE flashcard;

-- create a table

CREATE TABLE flashcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    answer TEXT
);
