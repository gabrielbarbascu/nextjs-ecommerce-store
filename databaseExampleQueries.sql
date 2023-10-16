--This file is only my notes, changing this
--file doesn't change anything in
--the database

--Create products table



CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  accessory varchar(30)
 );

--Insert some products (C in CRUD - Create)
INSERT INTO products
 (name, type, accessory)
 VALUES
  ('Sql', 'Injection', 'Database'),
  ('Phishing', 'Attack', 'Fraudem'),
  ('Malware', 'Virus', 'Software'),
  ('Ddos', 'Traffic', 'Overwhelm');
