import { Component, Input } from '@angular/core';


export interface User {
  id: number,
  name: string,
  email: string,
  profilePicture: string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input()
  user: User | null = null;
}
