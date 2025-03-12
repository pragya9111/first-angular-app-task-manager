import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-tasks/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskServices } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddTaskVisible = false;
  
  // private tasksService: TaskServices;

  // //Dependency Injection- here you tell Angular which type of value you need and Angular creates it and provided it as an argument. 
  // constructor(tasksService: TaskServices) {
  //   this.tasksService = tasksService;
  // }

  // This is a shorthand way of defining a constructor and initializing the tasksService property.
  constructor(private tasksService: TaskServices) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);

  }

  onCompleteTask(id: string) {
  }

  onAddTaskDialog() {
    this.isAddTaskVisible = true
  }

  onCancelAddTask() {
    this.isAddTaskVisible = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddTaskVisible = false;
  }
}