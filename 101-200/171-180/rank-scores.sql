SELECT Score,(SELECT count(DISTINCT Score)+1 FROM Scores AS a WHERE a.Score>b.Score) AS Rank 
from Scores AS b ORDER By Score DESC

 