import { Component } from '@angular/core';
import { DropdownModule } from '../dropdown/dropdown.module';
import { User, UserComponent } from '../Auxiliary/user/user.component';

@Component({
  selector: 'app-dropdown-custom-container',
  standalone: true,
  imports: [DropdownModule,UserComponent],
  templateUrl: './dropdown-custom-container.component.html',
  styleUrl: './dropdown-custom-container.component.css'
})
export class DropdownCustomContainerComponent {


  user: User = {
    email : 'devarshiroy93',
    id :101,
    name : "Devarshi",
    profilePicture : ''
  }
}
