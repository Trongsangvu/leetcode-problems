class LeakyBucketLimiter {
  constructor(capacity, leakRate) {
    this.capacity = capacity; // max queue size
    this.leakRate = leakRate; // requests per second
    this.queue = [];

    setInterval(() => {
      if (this.queue.length > 0) {
        const request = this.queue.shift();
        console.log(`Processed: ${request}`);
      }
    }, 1000 / this.leakRate);
  }

  allowRequest(request) {
    if (this.queue.length >= this.capacity) {
      console.log(`Rejected: ${request}`);
      return false;
    }

    this.queue.push(request);
    console.log(`Accepted: ${request}`);
    return true;
  }
}

const limiter = new LeakyBucketLimiter(5, 1);

for (let i = 1; i <= 8; i++) {
  limiter.allowRequest(`Request ${i}`);
}

/* Output:
  Accepted: Request 1
  Accepted: Request 2
  Accepted: Request 3
  Accepted: Request 4
  Accepted: Request 5
  Rejected: Request 6
  Rejected: Request 7
  Rejected: Request 8

  1 second later...
  Processed: Request 1

  1 second later...
  Processed: Request 2
  ...
 */
