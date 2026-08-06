// Instead of storing every timestamp, keep only two counters

class SlidingWindowCounterLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;

    this.currentWindow = Math.floor(Date.now() / windowMs);
    this.currentCount = 0;
    this.previousCount = 0;
  }

  allowRequest() {
    const nowWindow = Math.floor(Date.now() / this.windowMs);

    if (nowWindow !== this.currentWindow) {
      this.previousCount = this.currentCount;
      this.currentCount = 0;
      this.currentWindow = nowWindow;
    }

    const elapsed = Date.now() % this.windowMs;
    const weight = elapsed / this.windowMs;

    const estimated = this.previousCount * (1 - weight) + this.currentCount;

    if (estimated < this.limit) {
      this.currentCount++;
      return true;
    }

    return false;
  }
}

const limiter = new SlidingWindowCounterLimiter(5, 10000);

// This uses much less memory than Sliding Window Log.
