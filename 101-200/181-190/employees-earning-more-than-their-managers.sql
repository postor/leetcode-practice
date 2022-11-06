# Write your MySQL query statement below


SELECT a.Name as Employee FROM Employee as a LEFT JOIN Employee as b ON b.Id=a.ManagerId
  WHERE 
    b.Salary < a.Salary