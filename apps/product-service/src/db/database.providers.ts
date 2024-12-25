import { productModels } from './productModels';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const seqConfigs: SequelizeModuleOptions[] = [
  {
    dialect: 'postgres',
    host:
      process.env.NODE_ENV === 'production'
        ? process.env.DB_HOST
        : process.env.DB_HOST_DEV,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'nest',
    logging: true, // process.env.NODE_ENV === 'development',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      schema: process.env.SCHEMA || 'product',
      underscored: true,
    },
    models: productModels,
  },
];
