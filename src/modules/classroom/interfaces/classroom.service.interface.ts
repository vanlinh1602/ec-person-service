import { Optional } from 'sequelize';

import { Classroom } from '../database/classroom.entity';

export interface IClassroom {
  id: string;
  name: string;
  course: string;
  teacher: string[];
  students: string[];
  daysInWeek: string[];
  hoursInDay: string;
  dateStart: number;
  dateEnd: number;
  status: string;
}

export type IClassroomCreate = Optional<IClassroom, 'id'>;

export interface IClassroomService {
  getClassroom: (filter: Partial<IClassroom>) => Promise<Classroom>;
  getClassrooms: () => Promise<Classroom[]>;
  createClassroom: (classroom: Partial<IClassroom>) => Promise<Classroom>;
  updateClassroom: (id: string, classroom: Classroom) => Promise<boolean>;
  deleteClassroom: (classroomId: string) => Promise<boolean>;
}
