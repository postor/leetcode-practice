# Write your MySQL query statement below
SELECT 
  c.Name as Customers 
FROM 
  Customers as c LEFT JOIN Orders as o ON o.CustomerId = c.ID
WHERE
  o.Id IS NULL