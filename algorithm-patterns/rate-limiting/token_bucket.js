// Idea: Tokens refill over time

class TokenBucketLimiter {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;

    // tokens added per second
    this.refillRate = refillRate;

    this.lastRefill = Date.now();
  }

  allowRequest() {
    const now = Date.now();

    const seconds = (now - this.lastRefill) / 1000;

    this.tokens = Math.min(
      this.capacity,
      this.tokens + seconds * this.refillRate,
    );

    this.lastRefill = now;

    if (this.tokens >= 1) {
      this.tokens--;
      return true;
    }

    return false;
  }
}

const limiter = new TokenBucketLimiter(5, 1);

// This starts with 5 tokens and refills at 1 token/second.
