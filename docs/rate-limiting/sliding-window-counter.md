# Sliding Window Counter

## How it works

1.  Keep only two counters: previous and current window.
2.  Compute a weighted estimate using elapsed time.
3.  If estimated count is below the limit, allow.
4.  Otherwise reject.

Uses much less memory than Sliding Window Log.

# Request Flow

```text
Request
 |
Update current/previous window
 |
Estimate weighted count
 |
Estimate<Limit?
 |Yes      |No
Increment Reject
 |
Allow
```
