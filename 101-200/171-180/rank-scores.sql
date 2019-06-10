SELECT Score,(SELECT count(DISTINCT Score)+1 FROM Scores AS a WHERE a.Score>b.Score) AS Rank 
from Scores AS b ORDER By Score DESC


SELECT Score,DENSE_RANK() OVER (ORDER BY Score DESC) from Scores AS b ORDER By Score DESC

 