import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent], // when we use imports array like this, angular know this is standalone app (component based approach) , even if we dosen't set the standalone :true in the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  //selectedUserId= 'u1'; // default selected user id
  selectedUserId?:string;

  //get accsseor is not a function. so it called as a property
  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!; // find is js function, !-> use to tell. Trust me, this will not be undefined(if user not found then it can be undifined)
  }

  onSelectUser(id:string){
    console.log("User selected with id: "+id); //emit the event to the parent component with the selected user object.
    this.selectedUserId = id;
  }
}
