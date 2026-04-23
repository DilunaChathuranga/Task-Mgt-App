import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'}) // this will make the service available in the whole app, so we dont need to add it in the providers array of the module
export class TasksService {
    private tasks=[{
       id: 't1',
       userId: 'u1',
       title: 'Task 1',
       summary: 'Task 1 summary',
       dueDate: '2023-10-01'
     },
     {
       id: 't2',
       userId: 'u2',
       title: 'Task 2',
       summary: 'Task 2 summary',
       dueDate: '2023-10-02'
     },
     {
       id: 't3',
       userId: 'u3',
       title: 'Task 3',
       summary: 'Task 3 summary',
       dueDate: '2023-10-03'
     }];

     constructor(){ 
        const tasks=localStorage.getItem('tasks'); // get the tasks from the local storage
        if(tasks){
            this.tasks=JSON.parse(tasks); // parse the tasks from the local storage
        }
     }
      //not a getter its a method (getter can't have a parameters)
     getUserTasks(userId:string){
        return this.tasks.filter(task => task.userId === userId); // filter the tasks based on the user id
     }

     addTask(taskData: NewTaskData, userId: string) {
        const newTask={
            id: 't' + (this.tasks.length + 1),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          };
          //this.tasks.push(newTask); // append the new task to the end of the tasks array
          this.tasks.unshift(newTask); // add the new task to the begining of the tasks array
          this.saveTask(); // save the tasks to the local storage
     }

     removeTask(id:string){
        this.tasks=this.tasks.filter((task) => task.id !== id); // filter the tasks based on the task id
        this.saveTask();
     }

     private saveTask(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // save the tasks to the local storage
     }
   
}