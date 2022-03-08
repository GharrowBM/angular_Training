import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  alloNewServer = false;
  serverCreationStatus:string = "No server was created!";

  constructor() {
    setTimeout(() => {
      this.alloNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateSever() {
    this.serverCreationStatus = "Server was created!";
  }

}
