import { Component, OnInit } from '@angular/core';
import { StravaService } from 'src/app/services/strava.service';
import { ActivatedRoute } from '@angular/router';
import { Athlete } from './../../models/Athlete.model';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  // Graphique
  activitiesGraph: any[] = [];
  activities: any[] = [];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Sport';
  showYAxisLabel = true;
  yAxisLabel = 'Number';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  athlete: Athlete = new Athlete();

  constructor(private api: StravaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param.code) {
        this.api.getToken(param.code).subscribe((response: any) => {
          this.getAthlete(response.access_token);
          this.getListActivities(response.access_token);
        });
      }
    });
  }

  getAthlete(token: string) {
    this.api.getAthlete(token).subscribe(
      (athlete: any) => {
        console.log(athlete);
        this.athlete.firstname = athlete.firstname;
        this.athlete.lastname = athlete.lastname;
        this.athlete.avatar = athlete.profile;
        this.athlete.country = athlete.country;
        this.athlete.city = athlete.city;
      },
      error => console.log(error)
    );
  }

  getListActivities(token: string) {
    this.api.getListActivities(token).subscribe(
       (activities: any[]) => {
        this.getActivity(token, 'test');
        console.log(activities);
        this.activities = activities;
        const types = this.activities.reduce((prev, curr) => (prev[curr.type] = ++prev[curr.type] || 1, prev), {});
        // tslint:disable-next-line:forin
        for (const prop in types) {
          this.activitiesGraph.push({name: prop, value: types[prop]});
        }
        this.activitiesGraph = this.activitiesGraph.slice();
       }
    );
  }

  getActivity(token: string, id: string) {
    this.api.getActivity(token, '3536166557').subscribe(
      (activity: any) => {
       console.log(activity);
      }
   );
  }

  onSelect(event) {
    console.log(event);
  }

}
