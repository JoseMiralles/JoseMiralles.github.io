import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Page';
  me = new Person('Jose', 'Miralles');
  skills = new Skills();
}

//#region Classess
class Skills 
{
  constructor(){}

  webDevSkills = [
    'HTML5', 'CSS3', 'JavaScript',
    'Angalar', 'jQuery', 'Bootstrap'
  ];
  softwareDevSkills = [
    'C#', '.NET', 'VisualStudio', 'Xamarin.Android', 'Unit Testing', 'Agile (scrum)'
  ];
  otherSkills = [
    'Unix', 'illustartor', 'photoshop'
  ];
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
//#endregion