import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IStaff } from 'src/database/types/staffs';

import { StaffService } from '../services/staffs.service';

@Controller()
export class StaffApiController {
  constructor(private readonly teacherServices: StaffService) {}

  @Get('/get')
  async getStaff(
    @Param() params: Partial<IStaff>,
    @Query() query: any,
  ): Promise<IStaff[]> {
    const filter = { ...params, ...query };
    if (!Object.keys(filter).length) {
      const staffs = await this.teacherServices.getStaffs();
      return staffs.map((staff) => staff.dataValues);
    } else {
      const staffs = await this.teacherServices.getFilterStaff(filter);
      return staffs.map((staff) => staff.dataValues);
    }
  }

  @Post('/create')
  async createStaff(@Body() data: { staff: Partial<IStaff> }): Promise<IStaff> {
    const newStaff = await this.teacherServices.createStaff(data.staff);
    return newStaff.dataValues;
  }

  @Post('/update')
  async updateStaff(
    @Body() data: { id: string; staff: Partial<IStaff> },
  ): Promise<{ success: boolean }> {
    const success = await this.teacherServices.updateStaff(data.id, data.staff);
    return { success };
  }

  @Post('/delete')
  async deleteStaff(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.teacherServices.deleteStaff(data.id);
    return { success };
  }
}
