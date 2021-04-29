DROP DATABASE alumni;
CREATE DATABASE alumni;
\c alumni;

CREATE TABLE admin
(
    id serial primary key,
    username text not null,
    password text not null
);

CREATE TABLE alumni
(
    id serial primary key,
    firstName text not null,
    middleName text not null,
    lastName text not null,
    gradYear int not null,
    major text,
    occupation text,
    email text not null,
    emailUpdates text not null,
    personalUpdates text
);

CREATE TABLE pending
(
    id serial primary key,
    firstName text not null,
    middleName text not null,
    lastName text not null,
    gradYear int not null,
    major text,
    occupation text,
    email text not null,
    emailUpdates text not null,
    personalUpdates text
);

CREATE TABLE featured
(
    id int references alumni(id)
);

CREATE TABLE editing
(
    id int references alumni(id)
);

CREATE TABLE duplicates
(
    pendingId int references pending(id),
    alumniId int references alumni(id),
    primary key (pendingId,alumniId)
);

INSERT INTO alumni
    (firstName, middleName, lastName, gradYear,major, occupation, email, emailUpdates)
VALUES
    ('Brad', 'Lee', 'Weems', 2021, 'CPSC', 'geologist', 'bweem5ic@mail.umw.edu', 'y'),
    ('John', 'Smith', 'Doe', 2018, 'SPAN', 'scientist', 'jdoe6zc@gmail.com', 'n'),
    ('Kevin', 'Lee', 'Bob', 2017, 'MIST', 'engineer', 'kevin.lee@gmail.com', 'y'),
    ('Rupert', 'Joe', 'Hill', 2016, 'BUS', 'USGA', 'jhill@gmail.com', 'n'),
    ('Bobby', 'King', 'Hank', 2012, 'BIO', 'lab tech', 'bkhank@gmail.com', 'y'),
    ('Joe', 'Billy', 'Bob', 2020, 'ENG', 'Exxon', 'jbb@gmail.com', 'n'),
    ('Ashley', 'Katherine', 'Greene', 2019, 'CPSC', 'BP', 'akg@gmail.com', 'y');

INSERT INTO admin
    (username,password)
VALUES
    ('admin', 'password');