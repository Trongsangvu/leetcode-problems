# Token Bucket

## How it works

1.  Bucket starts with N tokens.
2.  Tokens refill at a constant rate.
3.  Each request consumes one token.
4.  If a token exists, allow.
5.  Otherwise reject or wait.

Allows short bursts while enforcing an average rate.

# Request Flow

```text
Request
 |
Refill tokens
 |
Token available?
 |Yes      |No
Consume   Reject/Wait
 |
Allow
```
