// Idea: Store timestamps of every request

class SlidingWindowLogLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.logs = [];
  }

  allowRequest() {
    const now = Date.now();

    while (this.logs.length && this.logs[0] <= now - this.windowMs) {
      this.logs.shift();
    }

    if (this.logs.length < this.limit) {
      this.logs.push(now);
      return true;
    }

    return false;
  }
}

const limiter = new SlidingWindowLogLimiter(5, 10000);

// Memory grows with the number of requests because every timestamp is stored
