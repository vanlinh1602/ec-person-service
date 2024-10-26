import { Module } from '@nestjs/common';

import { Courses } from './database/courses.entity';
import { CoursesService } from './services/courses.service';

@Module({
  imports: [],
  exports: [
    CoursesService,
    {
      provide: 'COURSES_REPOSITORY',
      useValue: Courses,
    },
  ],
  providers: [
    CoursesService,
    {
      provide: 'COURSES_REPOSITORY',
      useValue: Courses,
    },
  ],
  controllers: [],
})
export class CoursesModule {}
