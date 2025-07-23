import { TasksService } from './tasks.service';
import { NotFoundException } from '@nestjs/common';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
    service.clear();
  });

  it('should create a task', () => {
    const task = service.create({ title: 'Test', description: 'desc' });
    expect(task.id).toBe(1);
    expect(task.title).toBe('Test');
    expect(task.isDone).toBe(false);
  });

  it('should find all tasks', () => {
    service.create({ title: 'A', description: 'desc A' });
    service.create({ title: 'B', description: 'desc B' });
    expect(service.findAll().length).toBe(2);
  });

  it('should filter tasks by isDone', () => {
    const t1 = service.create({ title: 'Done', description: 'desc Done' });
    service.update(t1.id, { isDone: true });
    service.create({ title: 'Pending', description: 'desc Pending' });
    const done = service.findAll(true);
    const pending = service.findAll(false);
    expect(done.length).toBe(1);
    expect(pending.length).toBe(1);
  });

  it('should update a task', () => {
    const task = service.create({ title: 'Update me', description: 'desc Update me'});
    const updated = service.update(task.id, { title: 'Updated' });
    expect(updated.title).toBe('Updated');
  });

  it('should delete a task', () => {
    const task = service.create({ title: 'To delete', description: 'desc To Delete'});
    service.remove(task.id);
    expect(service.findAll().length).toBe(0);
  });

  it('should throw NotFound on invalid id', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });
});