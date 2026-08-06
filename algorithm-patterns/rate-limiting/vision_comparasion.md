Fixed Window
0---------10s---------20s
[#####] reset [#####]

Sliding Window Log
<---------10s--------->
Only requests inside the last 10s count.

Sliding Window Counter
Previous Window
[#####]
        \
         Weighted Estimate
        /
Current Window
[###]

Token Bucket
Bucket Capacity = 5

[*****]

Request -> remove *

Time passes

Bucket refills