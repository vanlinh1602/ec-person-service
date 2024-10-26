import { Sequelize } from 'sequelize-typescript';
import { Student } from 'src/modules/students/database/students.entity';
import { Teacher } from 'src/modules/teachers/database/teacher.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Student, Teacher]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
