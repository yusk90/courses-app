import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  styleUrls: [ './app.css' ],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
