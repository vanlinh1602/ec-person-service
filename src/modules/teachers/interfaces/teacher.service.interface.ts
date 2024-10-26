import { Optional } from 'sequelize';

import { Teacher } from '../database/teacher.entity';

export interface ITeacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  birthdate: number;
  address: string;
}

export type ITeacherCreate = Optional<ITeacher, 'id'>;

export interface ITeacherService {
  createTeacher: (teacher: ITeacher) => Promise<Teacher>;
  getTeacher: (teacherId: string) => Promise<Teacher>;
  getTeachers: () => Promise<Teacher[]>;
  updateTeacher: (teacherId: string, teacher: ITeacher) => Promise<boolean>;
  deleteTeacher: (teacherId: string) => Promise<boolean>;
}
