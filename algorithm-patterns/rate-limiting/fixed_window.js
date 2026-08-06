// Idea: Count requests in a fixed time window

class FixedWindowLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.counter = 0;
    this.windowStart = Date.now();
  }

  allowRequest() {
    const now = Date.now();

    if (now - this.windowStart >= this.windowMs) {
      this.windowStart = now;
      this.counter = 0;
    }

    if (this.counter < this.limit) {
      this.counter++;
      return true;
    }

    return false;
  }
}

const limiter = new FixedWindowLimiter(5, 10000);

for (let i = 1; i <= 7; i++) {
  console.log(i, limiter.allowRequest());
}

/* Output:
  1 true
  2 true
  3 true
  4 true
  5 true
  6 false
  7 false
 */
