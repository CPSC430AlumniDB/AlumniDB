CREATE DATABASE alumni;

CREATE TABLE alumni(
    id serial primary key,
    firstname text not null,
    middlename text not null,
    lastname text not null,
    occupation text not null,
    email text not null
);


CREATE TABLE pending(
    id serial primary key,
    firstname text not null,
    middlename text not null,
    lastname text not null,
    occupation text not null,
    email text not null
);

CREATE TABLE gradyear(
    id serial primary key,
    gradyear int not null 
);

CREATE TABLE alumni_year(
    alumniid integer references alumni(id),
    yearid integer references gradyear(id),
    primary key (alumniid, yearid)
);

CREATE TABLE pending_alumni_year(
    pendingid integer references pending(id),
    yearid integer references gradyear(id),
    primary key (pendingid, yearid)
);

CREATE TABLE majors(
    typeid serial primary key,
    major text not null
);

CREATE TABLE admin(
    id serial primary key,
    username text not null,
    password text not null

);

CREATE TABLE alumni_major(
 alumniid integer references alumni(id),
 majorid integer references majors(typeid),
 primary key (alumniid, majorid)
);

INSERT INTO majors(major) VALUES
('geology'),
('environmental science'),
('natural science'),
('social science'),
('environmental geology');

INSERT INTO alumni (firstname, middlename, lastname, occupation, email) VALUES
('Brad', 'Lee', 'Weems', 'geologist', 'bweem5ic@mail.umw.edu'),
('John', 'Smith', 'Doe', 'scientist', 'jdoe6zc@gmail.com'),
('Kevin', 'Lee', 'Bob', 'engineer', 'kevin.lee@gmail.com'),
('Rupert', 'Joe', 'Hill', 'USGA', 'jhill@gmail.com'),
('Bobby', 'King', 'Hank', 'lab tech', 'bkhank@gmail.com'),
('Joe', 'Billy', 'Bob', 'Exxon', 'jbb@gmail.com'),
('Ashley', 'Katherine', 'Greene', 'BP', 'akg@gmail.com');

INSERT INTO alumni_major(alumniid,majorid) VALUES
(1,1),
(2,1),
(3,2),
(4,5),
(5,4),
(6,3),
(7,4);

INSERT INTO admin (username,password) VALUES
('admin','password');

INSERT INTO gradyear(gradyear) VALUES
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
