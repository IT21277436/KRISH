SELECT s.SID, s.Sname, c.Cname FROM Course c, Student s WHERE s.CID = c.CID;


SELECT o.CID, m.Mname FROM Module m, Offers o WHERE o.Mcode = m.Mcode;


SELECT c.Cname, m.Mname FROM Course c, Module m, Offers o WHERE c.CID = o.CID AND o.Mcode = m.Mcode;


SELECT s.SID, s.Sname FROM Course c, Student s WHERE c.CID = s.CID AND c.C_fee > 100000;


SELECT m.Mname FROM Module m, Offers o WHERE m.Mcode = o.Mcode AND o.CID = 'IT' AND o.Accademic_year = 'Y1';
