import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  isActive: string = 'is-active';

  getActiveClasses(){
    return ['isActive'];
  }
}
