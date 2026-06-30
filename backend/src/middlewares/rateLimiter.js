import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit(req.ip);

    if (!success) {
      return res.status(429).json({ message: "Too Many Requests" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(429).json({ message: "Too Many Requests" });
  }
};

export default rateLimiter;