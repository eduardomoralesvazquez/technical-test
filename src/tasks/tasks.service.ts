import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  private nextId = 1;

  findAll(isDone?: boolean): Task[] {
    if (isDone === undefined) return this.tasks;
    return this.tasks.filter(t => t.isDone === isDone);
  }

  findOne(id: number): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new NotFoundException(`Task #${id} not found`);
    return task;
  }
  
  create(createDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.nextId++,
      title: createDto.title,
      description: createDto.description,
      isDone: false,
    };
    this.tasks.push(task);
    return task;
  }

  update(id: number, updateDto: UpdateTaskDto): Task {

    const task = this.findOne(id);

    if (updateDto.title !== undefined) {
      task.title = updateDto.title;
    }
    if (updateDto.description !== undefined) {
      task.description = updateDto.description;
    }
    if (updateDto.isDone !== undefined) {
      task.isDone = updateDto.isDone;
    }

    return task;
  }

  remove(id: number): void {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException(`Task #${id} not found`);
    this.tasks.splice(index, 1);
  }

  clear() {
    this.tasks = [];
    this.nextId = 1;
  }

}
