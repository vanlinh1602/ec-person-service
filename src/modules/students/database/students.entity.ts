import { Column, DataType, Model, Table } from 'sequelize-typescript';

import {
  IStudent,
  IStudentCreate,
} from '../interfaces/students.service.interface';

@Table({
  tableName: 'students',
})
export class Student extends Model<IStudent, IStudentCreate> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column(DataType.DOUBLE)
  birthdate: number;

  @Column
  gender: string;

  @Column
  address: string;
}
