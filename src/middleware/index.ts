type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: () => void
) => void;

const logger: ExpressMiddleware = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
};

