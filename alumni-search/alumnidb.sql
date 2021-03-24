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
    occupation text,
    email text not null,
    emailUpdates boolean not null,
    personalUpdates text
);

CREATE TABLE pending
(
    id serial primary key,
    firstName text not null,
    middleName text not null,
    lastName text not null,
    occupation text,
    email text not null,
    emailUpdates boolean not null,
    personalUpdates text
);

CREATE TABLE featured
(
    id integer references alumni(id)
);

CREATE TABLE year
(
    id serial primary key,
    year int not null
);

CREATE TABLE alumni_year
(
    alumniId integer references alumni(id),
    yearId integer references year(id),
    primary key (alumniId, yearId)
);

CREATE TABLE pending_year
(
    pendingId integer references pending(id),
    yearId integer references year(id),
    primary key (pendingId, yearId)
);

CREATE TABLE majors
(
    id serial primary key,
    major text not null
);

CREATE TABLE alumni_major
(
    alumniId integer references alumni(id),
    majorId integer references majors(id),
    primary key (alumniId, majorId)
);

CREATE TABLE pending_major
(
    pendingId integer references pending(id),
    majorId integer references majors(id),
    primary key (pendingId, majorId)
);

INSERT INTO majors
    (major)
VALUES
    ('geology'),
    ('environmental science'),
    ('natural science'),
    ('social science'),
    ('environmental geology');

INSERT INTO alumni
    (firstName, middleName, lastName, occupation, email, emailUpdates)
VALUES
    ('Brad', 'Lee', 'Weems', 'geologist', 'bweem5ic@mail.umw.edu', True),
    ('John', 'Smith', 'Doe', 'scientist', 'jdoe6zc@gmail.com', True),
    ('Kevin', 'Lee', 'Bob', 'engineer', 'kevin.lee@gmail.com', True),
    ('Rupert', 'Joe', 'Hill', 'USGA', 'jhill@gmail.com', True),
    ('Bobby', 'King', 'Hank', 'lab tech', 'bkhank@gmail.com', False),
    ('Joe', 'Billy', 'Bob', 'Exxon', 'jbb@gmail.com', False),
    ('Ashley', 'Katherine', 'Greene', 'BP', 'akg@gmail.com', False);

INSERT INTO alumni_major
    (alumniId,majorId)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 5),
    (5, 4),
    (6, 3),
    (7, 4);

INSERT INTO admin
    (username,password)
VALUES
    ('admin', 'password');

INSERT INTO year
    (year)
VALUES
    ('1980'),
    ('1981'),
    ('1982'),
    ('1983'),
    ('1984'),
    ('1985'),
    ('1986'),
    ('1987'),
    ('1988'),
    ('1989'),
    ('1990'),
    ('1991'),
    ('1992'),
    ('1993'),
    ('1994'),
    ('1994'),
    ('1995'),
    ('1996'),
    ('1997'),
    ('1998'),
    ('1999'),
    ('2001'),
    ('2002'),
    ('2003'),
    ('2004'),
    ('2005'),
    ('2006'),
    ('2007'),
    ('2008'),
    ('2009'),
    ('2011'),
    ('2012'),
    ('2013'),
    ('2014'),
    ('2015'),
    ('2016'),
    ('2017'),
    ('2018'),
    ('2019'),
    ('2020'),
    ('2021');
