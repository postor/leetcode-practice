# Write your MySQL query statement below
# Trips Users 

select
  Request_at as Day,
  ROUND(SUM(order_cancled)/SUM(order_count),2) as `Cancellation Rate`

  from (
    select 
      1 as order_count, 
      IF(t.Status='completed', 0, 1) as order_cancled,
      t.Request_at as Request_at

    from Trips as t 
    left join  Users as c on t.Client_Id = c.Users_Id 
    left join  Users as d on t.Driver_Id = d.Users_Id 

    where c.Banned ='No' and d.Banned ='No'
    and t.Request_at BETWEEN DATE('2013-10-01') and DATE('2013-10-03')
  ) as t

group by Request_at