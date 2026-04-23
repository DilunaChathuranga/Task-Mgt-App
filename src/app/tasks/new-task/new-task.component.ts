import { Component, EventEmitter, inject, Inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], //import the FormsModule to use the ngModel directive
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string; // to get the user id from the parent component
  @Output() close = new EventEmitter<void>();//not trnasmit(emit) any type of data, so generic type is void
  //@Output() add = new EventEmitter<NewTaskData>();
 
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  private tasksService=inject(TasksService); // inject the tasks service into the constructor. this is similar to constructor injection. but we dont need to create a constructor for this. we can use inject function to inject the service into the component. this is called constructor-less injection.

  //with Signals
  /*
  enteredTitle2=signal('');
  enteredSummary2=signal('')
  enteredDate2=signal('')
  */

  onCancel() {
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    },
    this.userId
  );
  this.close.emit();
}
  
}

