# Write your MySQL query statement below

select a.Id as Id from Weather as a 
left join Weather as b 
on date_sub(a.RecordDate, interval 1 day)=b.RecordDate 
where a.Temperature > b.Temperature