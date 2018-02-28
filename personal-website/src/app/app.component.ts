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
  }
}

///Represents a developer.
class Developer {
  firstName: string;
  lastName: string;

  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }
}