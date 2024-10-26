import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IStudent } from '../interfaces/students.service.interface';
import { StudentService } from '../services/students.service';

@Controller()
export class StudentApiController {
  constructor(private readonly studentServices: StudentService) {}

  @Get('/get/all')
  async getStudents(): Promise<IStudent[]> {
    const students = await this.studentServices.getStudents();
    return students.map((student) => student.dataValues);
  }

  @Get('/get/:id')
  async getStudent(@Param('id') id: string): Promise<IStudent> {
    const student = await this.studentServices.getStudent({ id });
    return student.dataValues;
  }

  @Post('/get')
  async getStudentByFilter(
    @Body() filter: Partial<IStudent>,
  ): Promise<IStudent> {
    const student = await this.studentServices.getStudent(filter);
    return student.dataValues;
  }

  @Post('/create')
  async createStudent(
    @Body() data: { student: Partial<IStudent> },
  ): Promise<IStudent> {
    const newStudent = await this.studentServices.createStudent(data.student);
    return newStudent.dataValues;
  }

  @Post('/update')
  async updateStudent(
    @Body() data: { id: string; student: IStudent },
  ): Promise<{ success: boolean }> {
    const success = await this.studentServices.updateStudent(
      data.id,
      data.student,
    );
    return { success };
  }

  @Post('/delete')
  async deleteStudent(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.studentServices.deleteStudent(data.id);
    return { success };
  }
}
