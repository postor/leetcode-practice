# The guess API is already defined for you.
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:

from math import floor


class Solution:
    def guessNumber(self, n: int) -> int:
        f = 1
        t = n
        while True:
            mid = floor((f+t)/2)
            tmp = guess(mid)
            if tmp == 0:
                return mid
            elif tmp == -1:
                t = mid-1
                continue
            else:
                f = mid+1
                continue
