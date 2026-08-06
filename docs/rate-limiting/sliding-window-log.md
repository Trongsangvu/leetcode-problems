# Sliding Window Log

## How it works

1.  Store the timestamp of every accepted request.
2.  For a new request, remove timestamps older than the window.
3.  Count remaining timestamps.
4.  Allow if count \< limit; otherwise reject.

Accurate but stores every request timestamp.

# Request Flow

```text
Request
 |
Remove expired timestamps
 |
Count timestamps
 |
Count<Limit?
 |Yes      |No
Store ts  Reject
 |
Allow
```
