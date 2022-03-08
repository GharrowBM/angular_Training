import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  alloNewServer:boolean = false;
  serverCreationStatus:string = "No server was created!";
  serverName:string = "TestServer";
  serverCreated:boolean = false;

  constructor() {
    setTimeout(() => {
      this.alloNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateSever() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
