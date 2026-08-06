# Leaky Bucket

## How it works

1.  Incoming requests enter a queue (bucket).
2.  Requests leave the bucket at a fixed rate.
3.  If the bucket is full, reject new requests.
4.  Output traffic is smooth and constant.

Useful for traffic shaping.

# Request Flow

```text
Request
 |
Bucket full?
 |Yes       |No
Reject    Enqueue
             |
      Leak at fixed rate
             |
         Process request
```
