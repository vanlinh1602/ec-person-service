import { Inject, Injectable } from '@nestjs/common';

import { Classroom } from '../database/classroom.entity';
import {
  IClassroom,
  IClassroomService,
} from '../interfaces/classroom.service.interface';

@Injectable()
export class ClassroomService implements IClassroomService {
  constructor(
    @Inject('CLASSROOM_REPOSITORY')
    private classroomRepository: typeof Classroom,
  ) {}

  async getClassroom(filter: Partial<IClassroom>): Promise<Classroom> {
    return this.classroomRepository.findOne({
      where: filter,
    });
  }

  async getClassrooms(): Promise<Classroom[]> {
    return this.classroomRepository.findAll();
  }

  async createClassroom(classroom: Partial<IClassroom>): Promise<Classroom> {
    return this.classroomRepository.create(classroom);
  }

  async updateClassroom(
    id: string,
    classroom: Partial<Classroom>,
  ): Promise<boolean> {
    const updated = await this.classroomRepository.update(classroom, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteClassroom(classroomId: string): Promise<boolean> {
    const deleted = await this.classroomRepository.destroy({
      where: {
        id: classroomId,
      },
    });
    return deleted > 0;
  }
}
