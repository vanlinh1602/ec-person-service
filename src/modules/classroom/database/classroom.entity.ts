import { Column, DataType, Model, Table } from 'sequelize-typescript';

import {
  IClassroom,
  IClassroomCreate,
} from '../interfaces/classroom.service.interface';

@Table({
  tableName: 'classrooms',
})
export class Classroom extends Model<IClassroom, IClassroomCreate> {
  @Column
  name: string;

  @Column
  course: string;

  @Column(DataType.JSON)
  teacher: string[];

  @Column(DataType.JSON)
  students: string[];

  @Column(DataType.JSON)
  daysInWeek: string[];

  @Column
  hoursInDay: string;

  @Column(DataType.DOUBLE)
  dateStart: number;

  @Column(DataType.DOUBLE)
  dateEnd: number;

  @Column
  status: string;
}
