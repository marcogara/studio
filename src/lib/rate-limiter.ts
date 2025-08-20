import { headers } from "next/headers";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 2, // 2 requests
  duration: 300, // per 5 minutes (300 seconds)
});

export const rateLimit = async () => {
  const ip = headers().get("x-forwarded-for") ?? "127.0.0.1";
  try {
    await rateLimiter.consume(ip);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
