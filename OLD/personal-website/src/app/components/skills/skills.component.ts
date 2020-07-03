import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  mainArray = Array<Array<Skill>>();

  constructor() { }

  ngOnInit() {
    this.populateSkillsArray();
  }

  //Populates the arrays that contain my skills.
  populateSkillsArray()
  {//TODO: GET these from a remote JSON file.
    var webSkills = [
      {type: skillType.webDev, name: 'HTML5', level: skillLvl.intermediate},
      {type: skillType.webDev, name: 'JavaScript', level: skillLvl.beginner},
      {type: skillType.webDev, name: 'TypeScript', level: skillLvl.beginner},
      {type: skillType.webDev, name: 'CSS3', level: skillLvl.intermediate},
      {type: skillType.webDev, name: 'Angular', level: skillLvl.beginner},
      {type: skillType.webDev, name: 'Bootstrap', level: skillLvl.beginner},
      {type: skillType.webDev, name: 'Sass', level: skillLvl.beginner},
    ];
    var dotNetSkills = [
      {type: skillType.dotNet, name: 'C#|.NET', level: skillLvl.intermediate},
      {type: skillType.dotNet, name: 'Visual Studio', level: skillLvl.intermediate},
      {type: skillType.dotNet, name: 'Xamarin.Android', level: skillLvl.intermediate},
      {type: skillType.dotNet, name: 'Xamarin.iOS', level: skillLvl.beginner},
    ];
    var adobeSkills = [
      {type: skillType.adobe, name: 'Illustrator', level: skillLvl.intermediate},
      {type: skillType.adobe, name: 'Photoshop', level: skillLvl.intermediate},
      {type: skillType.adobe, name: 'After Effects', level: skillLvl.beginner}
    ];
    var otherSkills = [
      {type: skillType.hetero,  name: 'Agile|SCRUM', level: skillLvl.intermediate},
      {type: skillType.hetero,  name: 'Responsive (Mobile First)', level: skillLvl.intermediate},
      {type: skillType.hetero,  name: 'Offline First', level: skillLvl.beginner}
    ];

    ///Enter these into the main array.
    this.mainArray = [
      webSkills,
      dotNetSkills,
      adobeSkills,
      otherSkills
    ];
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
  webDev = 'Web',
  adobe = 'Adobe',
  hetero = 'Others'
}
enum color {
  blue = 'blue',
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  white = 'white'
}
