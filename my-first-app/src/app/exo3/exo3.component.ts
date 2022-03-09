import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  secretDisplay:boolean = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDisplaySecrets() {
    this.secretDisplay = !this.secretDisplay;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
