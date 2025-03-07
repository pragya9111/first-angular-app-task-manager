import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

///// without using signals
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();  // when using output decorator

  get imageUrl() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
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