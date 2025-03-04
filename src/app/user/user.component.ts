import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

///// without using signals
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();  // when using output decorator

  get imageUrl() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

/////// while using signals
// export class UserComponent {

//   avatar = input.required<string>();
//   name = input.required<string>();
//   imageUrl = computed(() => 'assets/users/' + this.avatar);
//   select = output<string>();  // when not using output decorator (generally used with signals but not nessesary)

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }