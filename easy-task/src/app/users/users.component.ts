import { Component, computed, EventEmitter, input, Input, output, Output, ɵINPUT_SIGNAL_BRAND_WRITE_TYPE } from '@angular/core';
import { User } from './users.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [CardComponent]
})
export class UsersComponent {
  @Input({required: true}) user! :User;
  @Input({required: true}) isSelected! :boolean;
  // @Input({ required : true}) id!: string;
  // @Input() name!: string;
  // @Input() avatar!: string;
  // @Output() select = new EventEmitter();
  // get imagePath() {
  //   return 'users/' + this.avatar;
  // }
  // id = input<string>();
  //Working with signals
  // name = input.required<string>();
  // avatar = input.required<string>();
  select = output<string>();
  imagePath = computed(() => {return `users/${this.user.avatar}`} );

  OnClick(){
    this.select.emit(this.user.id);
  }


}


