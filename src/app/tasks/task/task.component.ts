import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task; //this data comming from the parent component (TasksComponent) and it is required. if the data is not comming from the parent component, then it will throw an error.
 // @Output() complete = new EventEmitter<string>(); //to emit completed task event
  private taskService=inject(TasksService); // to inject the tasks service into the constructor. this is similar to constructor injection. but we dont need to create a constructor for this. we can use inject function to inject the service into the component. this is called constructor-less injection.

  onCompleteTask() {
    this.taskService.removeTask(this.task.id); // remove the task from the tasks service

  }
}
