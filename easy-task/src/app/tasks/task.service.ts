import { Injectable } from '@angular/core';
import { addTask } from './add-task/addtask-module';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor(){
      const dummyTasks = localStorage.getItem('tasks');
      if(dummyTasks){
        this.dummyTasks = JSON.parse(dummyTasks);
      }
  }
  getUserTasks(userId: string){
    return this.dummyTasks.filter((task) => task.userId == userId);
  }

  removeFromDummy(id: string){
    this.dummyTasks = this.dummyTasks.filter(i => i.id !== id);
    this.saveTasks();
  }
  addTask(data: addTask, userId:string){
    this.dummyTasks.push({
      id: new Date().getDate().toFixed(),
      summary: data.summary,
      title: data.title,
      dueDate: data.dueDate,
      userId: userId
    });
    this.saveTasks();
  }
  

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.dummyTasks));
  }
  
}
