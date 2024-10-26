import { Inject, Injectable } from '@nestjs/common';

import { Courses } from '../database/courses.entity';
import {
  ICourses,
  ICoursesService,
} from '../interfaces/courses.service.interface';

@Injectable()
export class CoursesService implements ICoursesService {
  constructor(
    @Inject('COURSES_REPOSITORY')
    private classroomRepository: typeof Courses,
  ) {}

  async createCourse(course: Partial<ICourses>): Promise<Courses> {
    return this.classroomRepository.create(course);
  }

  async getCourse(classroomId: string): Promise<Courses> {
    return this.classroomRepository.findOne({
      where: {
        id: classroomId,
      },
    });
  }

  async getCourses(): Promise<Courses[]> {
    return this.classroomRepository.findAll();
  }

  async updateCourse(id: string, course: Partial<ICourses>): Promise<boolean> {
    const updated = await this.classroomRepository.update(course, {
      where: {
        id: id,
      },
    });
    return updated[0] > 0;
  }

  async deleteCourse(courseId: string): Promise<boolean> {
    const deleted = await this.classroomRepository.destroy({
      where: {
        id: courseId,
      },
    });
    return deleted > 0;
  }
}
