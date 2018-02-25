import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  me = new Person('Jose', 'Miralles');
}


class Person
{
  firstName: string;
  lastName: string;

  constructor(fName: string, lName: string)
  {
    this.firstName = fName;
    this.lastName = lName;
  }
}
