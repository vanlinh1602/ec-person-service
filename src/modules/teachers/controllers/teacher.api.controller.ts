import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ITeacher } from '../interfaces/teacher.service.interface';
import { TeacherService } from '../services/teacher.service';

@Controller()
export class TeacherApiController {
  constructor(private readonly teacherServices: TeacherService) {}

  @Get('/get/all')
  async getAll(): Promise<ITeacher[]> {
    const teacher = await this.teacherServices.getTeachers();
    return teacher.map((teacher) => teacher.dataValues);
  }

  @Get('/get/:id')
  async getTeacher(@Param('id') id: string): Promise<ITeacher> {
    const classroom = await this.teacherServices.getTeacher(id);
    return classroom.dataValues;
  }

  @Post('/create')
  async createTeacher(
    @Body() data: { teacher: Partial<ITeacher> },
  ): Promise<ITeacher> {
    const newTeacher = await this.teacherServices.createTeacher(data.teacher);
    return newTeacher.dataValues;
  }

  @Post('/update')
  async updateTeacher(
    @Body() data: { id: string; teacher: Partial<ITeacher> },
  ): Promise<{ success: boolean }> {
    const success = await this.teacherServices.updateTeacher(
      data.id,
      data.teacher,
    );
    return { success };
  }

  @Post('/delete')
  async deleteTeacher(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.teacherServices.deleteTeacher(data.id);
    return { success };
  }
}
