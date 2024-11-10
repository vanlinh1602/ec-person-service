import { ITeacher } from 'src/database/types/teachers';

import { Teacher } from '../../../database/entities/teachers/teacher.entity';

export interface ITeacherService {
  createTeacher: (teacher: ITeacher) => Promise<Teacher>;
  getTeacher: (teacherId: string) => Promise<Teacher>;
  getTeachers: () => Promise<Teacher[]>;
  updateTeacher: (teacherId: string, teacher: ITeacher) => Promise<boolean>;
  deleteTeacher: (teacherId: string) => Promise<boolean>;
}
