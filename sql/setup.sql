-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS team;

CREATE TABLE team (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    school VARCHAR NOT NULL,
    mascot VARCHAR NOT NULL,
    location VARCHAR NOT NULL
);

INSERT INTO team (school, mascot, location)
VALUES 
('University of Oregon', 'Duck', 'Eugene Oregon'),
('University of Southern California', 'Trojan', 'Los Angeles California'),
('University of California Los Angeles', 'Bruin', 'Los Angeles California'),
('University of Utah', 'Utes', 'Salt Lake City Utah'),
('University of Washington', 'Husky', 'Seattle Washington'),
('Arizona Sate University', 'Sun Devil', 'Tempe Arizona'),
('University of Arizona', 'Wildcat', 'Tucson Arizona'),
('Stanford University', 'Standford', 'Standford California'),
('Oregon State University', 'Beaver', 'Corvallis Oregon'),
('University of Colorado', 'Buffalo', 'Boulder Colorado'),
('University of California Berkeley', 'Bear', 'Barkeley California'),
('Washington State University', 'Cougar', 'Pullman Washington');
