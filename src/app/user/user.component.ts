import { Component, computed, EventEmitter, input, Input, Output, output} from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { User } from './user.model';

//Sub Appraoch 2 a  - Defing a object with  type
// with type we can define both object types and function types.
/*
type User = {
  id:string;
  avatar:string;
  name:string;
  selected:boolean;
};
*/

//Sub Appraoch 2 b - Defing a object with  interface
// With interface we can only define object types. we can't define function types.
/*
interface User {
  id:string;
  avatar:string;
  name:string;
  selected:boolean;
};
*/
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // *** In Angular, we can use the @Input() and @Output() decorators to create input and output properties respectively.
  // *** We can also use signals to create input and output properties. Signals are a new feature in Angular that allows us to create reactive properties that can be used to create reactive components.
  // *** Signals are a new way to create reactive properties in Angular. They are similar to observables, but they are more lightweight and easier to use.

  // Input properties are used to pass data from the parent component to the child component (AppComponent TO UserComponent) -> Used to accept inputs such settable property from outside the component.
  /*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  // Approach 1 - Decorator based Input properties/ older approach 
  //@Input() avatar!: string; // Here we use ! mark to tell the compiler that this property will be initialized later.
  /*
  @Input({required:true}) id!: string; // By making required = true we are making this property required. If this property is not passed from the parent component, then it will throw an error.
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Input({required:true}) selected!:boolean
  */
 @Input({required:true}) user!: User;

  /* 
  Sub Appraoch 1 - Object based Input properties /older approach
  // Instead of defined seperate 4 Input we can also define a single input property as an object. This is useful when we have multiple properties to pass to the child component. This will make the code cleaner and easier to read
  @Input({required:true}) user!: {
    id:string;
    avatar:string;
    name:string;
    selected:boolean;
  };

 // Type based & Interface based Input properties /newer approach
  //@Input() user!: User;

  //accessing the input property as an object
  this.user.id;
  this.user.avatar;
  this.user.name;
  this.user.selected;
  */

  

  // Approach 2- Signal based Input properties /newer approach
  // define input property with signal (input signal, they read only can't use set method to set values)
  // input signals are readonly. so These input signals can't change (using set method) inside the component but can change from the parent component. Whenever the parent component changes the value of these input properties, the child component will automatically update the view with the new values.
  //avatar=input.required<String>(); 
  //id=input.required<string>();
  //name=input.required<String>(); 

  // Output properties are used to emit events from the child component to the parent component (UserComponent TO AppComponent) -> to emit events to the parent component, Here we use EventEmitter to create an event that can be emitted to the parent component
  /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  // Approach 1- Decorator based Output properties/ older approach 
  @Output() select = new EventEmitter(); // Here we use EventEmitter to create an event that can be emitted to the parent component. 
  //@Output() select = new EventEmitter<string>(); // Here we use use generic type for extra type safety. This will emit an event with a string type.
  
  // Approach 2- EventEmitter like signal.(but this is not a signal, this is a normal event emitter) /newer approach
  //select = output<string>(); //to emit events to the parent component, 


  //Approach 1 - using getter -Every time Angular accesses imagePath, the getter runs and returns the latest value of the avatar property.
  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }

  // Approach 2 - using signal(computed) - computed() creates a reactive computed signal, which automatically tracks dependencies (this.avatar) and updates whenever they change. must use Signals for this to work (this.avatar should be a signal too)
  //imagePath = computed(() =>{'assets/users/'+this.avatar;});
  
  //Approach 2 - Emits an event (likely from an @Output() named select) with the current user's ID. Used to communicate to a parent component that this user was selected
  //event triggering starting point for the event emitter. This method is called when the user clicks on the user card.
  onSelectUser(){
    this.select.emit(this.user.id); //emit the event to the parent component with the selected user object.
  }
}
