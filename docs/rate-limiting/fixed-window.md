# Fixed Window Counter

## How it works

1.  Start a fixed time window (e.g. 60s).
2.  Count each incoming request.
3.  If count \<= limit, allow.
4.  Otherwise reject.
5.  When the window expires, reset the counter.

Example:

    Window 0-60s
    Req1 ✓
    Req2 ✓
    Req6 ✗ (limit=5)

    New window -> counter=0

# Request Flow

```text
Request
  |
Check current window
  |
Window expired?--Yes-->Reset counter
  | No
Counter < Limit?
 |Yes        |No
Allow      Reject
```
