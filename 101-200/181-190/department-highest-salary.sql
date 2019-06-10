
SELECT 
  d.Name as Department, e.Name as Employee, e.Salary as Salary
FROM 
  Employee as e LEFT JOIN (
    SELECT 
      *, (
        SELECT MAX(e1.Salary) 
        FROM Employee as e1 
        WHERE e1.DepartmentId = Department.ID
      ) as MaxSalary 
    FROM Department 
  ) as d ON e.DepartmentId = d.Id
WHERE 
  e.Salary = d.MaxSalary





# 这个太慢

SELECT 
  d.Name as Department, e.Name as Employee, e.Salary as Salary
FROM 
  Employee as e LEFT JOIN Department as d ON e.DepartmentId = d.Id
WHERE 
  e.Salary = (SELECT MAX(e1.Salary) FROM Employee as e1 WHERE e1.DepartmentId = d.ID)


# 这个无法查出重复工资的
SELECT 
  d.Name as Department, e.Name as Employee, MAX(e.Salary) as Salary
FROM 
  Employee as e LEFT JOIN Department as d ON e.DepartmentId = d.Id
GROUP BY
  e.DepartmentId   