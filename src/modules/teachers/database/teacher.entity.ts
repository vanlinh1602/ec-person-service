import { Column, DataType, Model, Table } from 'sequelize-typescript';

import {
  ITeacher,
  ITeacherCreate,
} from '../interfaces/teacher.service.interface';

@Table({
  tableName: 'teachers',
})
export class Teacher extends Model<ITeacher, ITeacherCreate> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  gender: string;

  @Column(DataType.DOUBLE)
  birthdate: number;

  @Column
  address: string;
}
