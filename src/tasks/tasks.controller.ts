import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // NOTE: one way to create a dependency injection
  // tasksService: TasksService;

  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }

  // NOTE: another way to create a dependency injection by using "private" keyword
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
