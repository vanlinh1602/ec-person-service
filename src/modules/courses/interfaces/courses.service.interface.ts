import { Optional } from 'sequelize';

import { Courses } from '../database/courses.entity';

export interface ICourses {
  id: string;
  name: string;
  description: string;
  duration: number;
  level: string;
  status: string;
  price: number;
}

export type ICoursesCreate = Optional<ICourses, 'id'>;

export interface ICoursesService {
  createCourse: (courses: ICourses) => Promise<Courses>;
  getCourse: (coursesId: string) => Promise<Courses>;
  getCourses: () => Promise<Courses[]>;
  // updateClassroom: (classroom: Classroom) => Promise<Classroom>;
  // deleteClassroom: (classroomId: string) => Promise<boolean>;
}
