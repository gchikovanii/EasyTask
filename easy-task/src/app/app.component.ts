import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from '../data/dumy-users';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;
  selectedName? : string;
  isSelected? : boolean;
  selectedUserId!: string;

  get selectedUser(){
    return this.users.find(i => i.id == this.selectedUserId);
  }

  OnSelectedUser(id: string){
    this.selectedUserId = id;
    this.selectedName = this.selectedUser?.name;
  }
  
}
