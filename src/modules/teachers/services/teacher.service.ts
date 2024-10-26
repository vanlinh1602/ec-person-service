import { Inject, Injectable } from '@nestjs/common';

import { Teacher } from '../database/teacher.entity';
import {
  ITeacher,
  ITeacherService,
} from '../interfaces/teacher.service.interface';

@Injectable()
export class TeacherService implements ITeacherService {
  constructor(
    @Inject('TEACHER_REPOSITORY')
    private teacherRepository: typeof Teacher,
  ) {}

  async createTeacher(teacher: Partial<ITeacher>): Promise<Teacher> {
    return this.teacherRepository.create(teacher);
  }

  async getTeacher(teacherId: string): Promise<Teacher> {
    return this.teacherRepository.findOne({
      where: {
        id: teacherId,
      },
    });
  }

  async getTeachers(): Promise<Teacher[]> {
    return this.teacherRepository.findAll();
  }

  async updateTeacher(
    id: string,
    teacher: Partial<ITeacher>,
  ): Promise<boolean> {
    const updated = await this.teacherRepository.update(teacher, {
      where: {
        id: id,
      },
    });
    return updated[0] > 0;
  }

  async deleteTeacher(teacherId: string): Promise<boolean> {
    const deleted = await this.teacherRepository.destroy({
      where: {
        id: teacherId,
      },
    });
    return deleted > 0;
  }
}