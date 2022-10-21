import entites from '../entities';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '054937',
  database: 'express-graphql',
  synchronize: process.env.NODE_ENV === 'development',
  logging: false,
  entities: entites,
  subscribers: [],
  migrations: [],
});

export default dataSource;