import { Component, Input, input, output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent ,AddTaskComponent]
})
export class TasksComponent {
    isAddingTask = false;
    constructor(private taskService: TaskService){
    }
    @Input() name?: string;
    @Input() userId!: string;
  get selectUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  addTask(){
    this.isAddingTask = true;
  }
  changeTaskStatus(){
    this.isAddingTask = false;
  }
}
