import {
  Component,
  OnInit
} from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app',  
  template: `<div>
  <p style="font-size: 14px; margin: 15px;">{{text}}</p>
  `,
  styles:[`
      html {
        height: 100%;
      }
      body {
        min-height: 100%;
      }
  `]
})
export class AppComponent implements OnInit {
 
  public text = 'This is a test app.';  

  constructor() {}

  public ngOnInit() {
    console.log('app init');
   
  }
  
}
