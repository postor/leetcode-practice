SELECT 
  d.Name as Department, e.Name as Employee, e.Salary as Salary
FROM 
  Employee as e LEFT JOIN (
    SELECT 
      *, IFNULL((
        SELECT DISTINCT e1.Salary 
        FROM Employee as e1 
        WHERE e1.DepartmentId = Department.Id
        ORDER BY e1.Salary DESC
        LIMIT 2,1
      ),0) as TopSalary 
    FROM Department 
  ) as d ON e.DepartmentId = d.Id
WHERE 
  e.Salary >= d.TopSalary
