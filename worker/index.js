const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000 * 1 // 1 second = 1000 milliseconds
});

const sub = redisClient.duplicate();

// Recursive function to calculate the Fibonacci sequence
// it is not ideal, but it is a good example of why we need redis
// because it is very slow.
const fib = (index) => {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

// Anytime we get a new value, calculate the fibonacci value for it
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});
// Anytime we get a new value, insert it into redis
sub.subscribe('insert');