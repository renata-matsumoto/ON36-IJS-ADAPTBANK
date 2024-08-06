import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ManagerService } from "../services/manager.service";
import { Manager } from "../models/manager.model";

@Controller('managers')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}


  @Post()
  createManager(
    @Body('id', ParseIntPipe) id: number,
    @Body('fullName') fullName: string,
    @Body('customerId', ParseIntPipe) customerId: number
  ): Manager {
    return this.managerService.createManager(id, fullName, customerId);
  }

  @Get()
  findAllManagers(): Manager[] {
    return this.managerService.findAllManagers();
  }

  @Get(':id')
  findManagerById(@Param('id', ParseIntPipe) id: number): Manager {
    return this.managerService.findManagerById(id);
  }
}
