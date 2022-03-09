import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }`]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: boolean = true;

  constructor() {
    this.serverStatus = Math.random() > 0.5;
  }

  getServerStatus() {
    return this.serverStatus ? "Online" : "Offline";
  }

  getColor() {
    return this.serverStatus ? "green" : "red";
  }
}
