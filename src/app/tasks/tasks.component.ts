import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!: string; //here getting the
  @Input({required:true}) name!: string;
  isAddingTask = false; // to show the add task form or not
  //private tasksService:TasksService; // create a new instance of the tasks service

  constructor(private tasksService:TasksService){ //here when we use private or public we dont need to explicitly assign value to taskService
    //this.tasksService=taskService; // inject the tasks service into the constructor 
  }
  

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId); // get the tasks of the selected user
};
   
onStartAddTask(){
  this.isAddingTask=true;
}

onCloseAddTask(){
  this.isAddingTask=false; // to show the add task form or not

}
/*
onAddTask(taskData: NewTaskData){
}
*/

}
