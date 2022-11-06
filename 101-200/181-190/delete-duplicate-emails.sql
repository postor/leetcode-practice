# Write your MySQL query statement below

delete a from Person as a left join Person as b on a.Email=b.Email where a.ID > b.ID