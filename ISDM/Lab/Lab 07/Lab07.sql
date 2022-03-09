SELECT c.CID, count(s.SID) AS 'No of Students' FROM Course c, Student s WHERE c.CID = s.CID GROUP BY c.CID; 

SELECT c.Cname, count(s.SID) AS 'No of Students' FROM Course c, Student s WHERE c.CID = s.CID GROUP BY c.Cname;

SELECT c.Cname, count(o.Mcode) FROM Course c, Offers o WHERE c.CID = o.CID AND o.Accademic_year = 'Y1' GROUP BY c.CID, c.Cname, o.Accademic_year HAVING count(o.Mcode) > 2; 

SELECT c.Cname, o.Accademic_year, count(o.Mcode) FROM Course c, Offers o WHERE c.CID = o.CID AND o.Accademic_year = 'Y1' GROUP BY c.CID, c.Cname, o.Accademic_year HAVING count(o.Mcode) > 2 ORDER BY count(o.mcode); 

