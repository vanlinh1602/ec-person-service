import { Optional } from 'sequelize';

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
