# Write your MySQL query statement below
 
 #stadium id, visit_date, people
select s.* from stadium as s
where s.id in (select s1.id as id from stadium as s1 
left join stadium as s2 on s2.id=s1.id+1
left join stadium as s3 on s3.id=s2.id+1
where s1.people>=100 and s2.people>=100 and s3.people>=100) or (s.id-1) in (select s1.id as id from stadium as s1 
left join stadium as s2 on s2.id=s1.id+1
left join stadium as s3 on s3.id=s2.id+1
where s1.people>=100 and s2.people>=100 and s3.people>=100) or (s.id-2) in (select s1.id as id from stadium as s1 
left join stadium as s2 on s2.id=s1.id+1
left join stadium as s3 on s3.id=s2.id+1
where s1.people>=100 and s2.people>=100 and s3.people>=100)