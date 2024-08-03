import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { addTask } from './addtask-module';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input() userId!: string;
  @Output() isClickedOnCancel = new EventEmitter<void>();
  
  taskService = inject(TaskService);
  title = '';
  dueDate = '';
  summary = '';
  onSubmit(){
   this.taskService.addTask({
    title: this.title,
    dueDate: this.dueDate,
    summary: this.summary
   },this.userId)
   this.cancelButton();
  }
  cancelButton(){
    this.isClickedOnCancel.emit();
  }

}
