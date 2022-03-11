import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName:string = '';
  // newServerContent:string = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: string) {
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName: serverName, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName: string) {
    this.blueprintCreated.emit({serverName: serverName, serverContent: this.serverContentInput.nativeElement.value});
  }
}
