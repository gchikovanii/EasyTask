import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent,DatePipe]
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();
  taskService = inject(TaskService);  

  OnCompleted(){
    this.taskService.removeFromDummy(this.task.id);
  }
}