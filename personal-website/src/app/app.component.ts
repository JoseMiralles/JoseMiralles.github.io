import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';
import { INHERITED_CLASS } from '@angular/core/src/reflection/reflection_capabilities';

@Component(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent
{
  title = 'app';
  me = new Developer('Jose', 'Miralles');

  ngOnInit() {
    this.me.skills = Developer.getSkills();
  }
}

///Represents a developer.
class Developer {
  firstName: string;
  lastName: string;
  skills: Skill[];

  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }

  //Generates my skills and returns them in a Skill[] array.
  static getSkills()
  { //TODO: generate these from a remote json file for easier updating.
    let skills: Array<Skill> = [
      //.Net Skills
      {type: skillType.dotNet, name: 'C#|.NET', level: skillLvl.intermediate},
      {type: skillType.dotNet, name: 'Visual Studio', level: skillLvl.intermediate},
      {type: skillType.dotNet, name: 'Xamarin.Android', level: skillLvl.intermediate},
      {type: skillType.dotNet, name: 'Xamarin.iOS', level: skillLvl.beginner},

      //Web Development Skills
      {type: skillType.webDev, name: 'HTML5', level: skillLvl.intermediate},
      {type: skillType.webDev, name: 'JavaScript|Typescript', level: skillLvl.intermediate},
      {type: skillType.webDev, name: 'CSS3', level: skillLvl.intermediate},
      {type: skillType.webDev, name: 'Angular', level: skillLvl.beginner},
      {type: skillType.webDev, name: 'Bootstrap', level: skillLvl.beginner},
      {type: skillType.webDev, name: 'Sass', level: skillLvl.beginner},

      //Adobe Cloud Skills
      {type: skillType.adobe, name: 'Illustrator', level: skillLvl.intermediate},
      {type: skillType.adobe, name: 'Photoshop', level: skillLvl.intermediate},
      {type: skillType.adobe, name: 'After Effects', level: skillLvl.beginner},

      //Heterogenous Skills
      {type: skillType.hetero,  name: 'Agile|SCRUM', level: skillLvl.intermediate},
      {type: skillType.hetero,  name: 'Responsive (Mobile First)', level: skillLvl.intermediate},
      {type: skillType.hetero,  name: 'Offline First', level: skillLvl.beginner}
    ];
    return skills;
  }
}

//Skill class
class Skill {
  type: skillType;
  name: string;
  level: skillLvl;
  //color: color = color.blue;
}
enum skillLvl {
  beginner = 'beginner',
  intermediate = 'intermediate',
  expert = 'expert'
}
enum skillType {
  dotNet = '.NET',
  webDev = 'WEB',
  adobe = 'ADOBE',
  hetero = 'HETEROGENOUS'
}
enum color {
  blue = 'blue',
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  white = 'white'
}