
import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.componentWithSignal Change Detection.html',
  styleUrl: './user.component.css'
})
export class UserComponentWithSignal {
  // Approach 1 - With zone.js change detection mechanism detecting the changes in the selectedUser object and updating the view automatically.
  // selectedUser=DUMMY_USERS[randomIndex]; 

  // Approach 2 - With Signal change detection mechanism. We need to use the signal function to create a signal object that will notify the view when the value changes.
  selectedUser=signal(DUMMY_USERS[randomIndex]); 


  // Approach 1 -To get a value(read), getters are used to access the properties of the class
  /*
  get imagePath(){
    return 'assets/users/'+this.selectedUser.avatar;
  }
  */
    
  // Approach 2 - To get a value(read), we can use the signal object directly in the template. The signal object will notify the view when the value changes.
  // Only when the signal object (selectedUser) changes, the computed property (imagePath) will be re-evaluated and the view will be updated accordingly.
  imagePath = computed(() => 
    'assets/users/'+ this.selectedUser().avatar
  );

  onSelectUser(){
    const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
    // Approach 1 - set(write) the Dummy user value to the selectedUser object
    // this.selectedUser=DUMMY_USERS[randomIndex];

    // Approach 2 - set(write) the Dummy user value to the selectedUser signal object. We need to use the set method to update the value of the signal object.
    this.selectedUser.set(DUMMY_USERS[randomIndex]); 
  }
}
