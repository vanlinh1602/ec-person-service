import { Sequelize } from 'sequelize-typescript';

import { Staff } from './entities/staffs/staffs.entity';
import { Student } from './entities/students/students.entity';
import { Teacher } from './entities/teachers/teacher.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Student, Teacher, Staff]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
