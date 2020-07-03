import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}

//#region ------- CLASSES

///Represents a project.
class Project
{
  name: string;
  technologies: string[];
  platform: string;
  links: Links;

  constructor(
    pName: string,
    pTechnologies: string[],
    pPlatform: string,
    pLinks: Links )
  {
    this.name = pName;
  }
}

///Holds the links for each class.
interface Links
{
  app: string;
  gitHub: string;
  icon: string;
}
//#endregion ------ END CLASSES