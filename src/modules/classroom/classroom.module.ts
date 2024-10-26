import { Module } from '@nestjs/common';

import { Classroom } from './database/classroom.entity';
import { ClassroomService } from './services/classroom.service';

@Module({
  imports: [],
  exports: [
    ClassroomService,
    {
      provide: 'CLASSROOM_REPOSITORY',
      useValue: Classroom,
    },
  ],
  providers: [
    ClassroomService,
    {
      provide: 'CLASSROOM_REPOSITORY',
      useValue: Classroom,
    },
  ],
  controllers: [],
})
export class ClassroomModule {}
