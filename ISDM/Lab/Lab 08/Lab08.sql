CREATE TABLE Course(
CID char(6), 
Cname varchar(50), 
C_Description varchar(200), 
C_fee int, 
CONSTRAINT Course_PK PRIMARY KEY(CID)
);

CREATE TABLE Module(
Mcode char(6), 
Mname varchar(50), 
M_Description varchar(200), 
NoOfCredits int, 
CONSTRAINT Module_PK PRIMARY KEY(Mcode)
);

CREATE TABLE Offers(
CID char(6), 
Mcode char(6), 
Accadamic_year char(2),
Semester int,
CONSTRAINT Offers_PK PRIMARY KEY(CID,Mcode), 
CONSTRAINT Offers_Mcode_FK FOREIGN KEY(Mcode) 
REFERENCES Module(Mcode),
CONSTRAINT Offer_CID_FK FOREIGN KEY(CID)
REFERENCES Course(CID)
);

CREATE TABLE Student(
SID char(10),
Sname varchar(50),
Address varchar(50),
dob date,
NIC char(10),
CID char(6),
CONSTRAINT Student_PK PRIMARY KEY(SID),
CONSTRAINT Student_CID_FK FOREIGN KEY(CID)
REFERENCES Course(CID)
);


ALTER TABLE Student
add CONSTRAINT CHK_Student
CHECK (NIC like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V-v]');

ALTER TABLE Module
ADD CONSTRAINT CHK_Module
CHECK (NoofCredits in (1,2,3,4));
