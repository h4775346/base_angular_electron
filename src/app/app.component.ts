import { Component } from '@angular/core';
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-elec';
  constructor(private electron:ElectronService) {
    this.title = electron.isElectronApp?'Electron App':'Web App';
  }

  test() {
    if (this.electron.isElectronApp){
      this.electron.ipcRenderer.send('test');
    }
  }
}
