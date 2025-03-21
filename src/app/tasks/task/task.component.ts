import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();

  private taskService = inject(TaskServices);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}