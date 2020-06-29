import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'TestString';
  serverCreationStatus = 'no server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: InputEvent){
    console.log(event);//this.serverCreationStatus =
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}