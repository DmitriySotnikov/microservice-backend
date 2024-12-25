///
export const commonVars = {
  PRODUCT_SERVICE: 'PUBLIC_SERVICE',
};

export const serverConfig = {
  isProd: process.env.NODE_ENV === 'production',
  PORT: parseInt(process.env.PORT, 10) || 8000,
  JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET',
  PREFIX: 'api',
  rabbitMQUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.RABBIT_MQ_URI
      : process.env.RABBIT_MQ_URI_DEV,
};

export const corsOptions = {
  preflightContinue: false,
  optionsSuccessStatus: 204,
  origin: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  // allowed headers
  allowedHeaders: [
    'Content-Type',
    'Origin',
    'X-Requested-With',
    'Accept',
    'Authorization',
  ],
  // headers exposed to the client
  exposedHeaders: ['Authorization'],
  credentials: true, // Enable credentials (cookies, authorization headers) cross-origin
};
