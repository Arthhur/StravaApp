import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'StravaApp';

  constructor() {
  }

  redirectToLoginStrava() {
      // tslint:disable-next-line:max-line-length
    window.location.href = 'https://www.strava.com/oauth/authorize?client_id=25072&response_type=code&redirect_uri=https://strava-app.netlify.app/athlete&approval_prompt=force&scope=activity:read';
  }

}
