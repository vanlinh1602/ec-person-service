import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ICourses } from '../interfaces/courses.service.interface';
import { CoursesService } from '../services/courses.service';

@Controller()
export class CoursesApiController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get('/get/all')
  async getAll(): Promise<ICourses[]> {
    const courses = await this.coursesServices.getCourses();
    return courses.map((course) => course.dataValues);
  }

  @Get('/get/:id')
  async getCourse(@Param('id') id: string): Promise<ICourses> {
    const classroom = await this.coursesServices.getCourse(id);
    return classroom.dataValues;
  }

  @Post('/create')
  async createCourse(
    @Body() data: { course: Partial<ICourses> },
  ): Promise<ICourses> {
    const newCourse = await this.coursesServices.createCourse(data.course);
    return newCourse.dataValues;
  }

  @Post('/update')
  async updateCourse(
    @Body() data: { id: string; course: Partial<ICourses> },
  ): Promise<{ success: boolean }> {
    const success = await this.coursesServices.updateCourse(
      data.id,
      data.course,
    );
    return { success };
  }

  @Post('/delete')
  async deleteCourse(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.coursesServices.deleteCourse(data.id);
    return { success };
  }
}
