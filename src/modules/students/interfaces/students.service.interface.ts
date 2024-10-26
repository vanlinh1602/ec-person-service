import { Optional } from 'sequelize';

import { Student } from '../database/students.entity';

export interface IStudent {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthdate: number;
  gender: string;
  address: string;
}

export type IStudentCreate = Optional<IStudent, 'id'>;

export interface IStudentService {
  getStudent: (filter: Partial<IStudent>) => Promise<Student>;
  getStudents: () => Promise<Student[]>;
  createStudent: (student: Partial<IStudent>) => Promise<Student>;
  updateStudent: (id: string, student: Student) => Promise<boolean>;
  deleteStudent: (studentId: string) => Promise<boolean>;
}
