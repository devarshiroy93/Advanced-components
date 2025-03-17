import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserComponent } from '../Auxiliary/user/user.component';
import { IntersectionobserverDirective } from './directives/intersectionobserver.directive';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [UserComponent,IntersectionobserverDirective],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.css'
})
export class InfiniteScrollComponent {

  @Input()
  users: User[] = [];

  @Output()
  fetchNext: EventEmitter<boolean> = new EventEmitter(false);

  ngOnInit(): void {

  }

  handleIsintersecting(value: boolean) {
    console.log('VALUE--->', value);
    this.fetchNext.emit(value);
  }
}
