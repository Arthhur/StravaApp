import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  token = environment.token;
  redirectUrl = 'http://localhost/';

  // tslint:disable-next-line:max-line-length
  authorizeUrl = `https://www.strava.com/oauth/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUrl}&approval_prompt=force&scope=read`;

  constructor(private http: HttpClient) { }

  authorize() {
    return this.http.get(this.authorizeUrl);
  }

  getToken(code: string) {
    let params = new HttpParams();
    params = params.append('client_id', this.clientId);
    params = params.append('client_secret', this.clientSecret);
    params = params.append('code', code);
    params = params.append('grant_type', 'authorization_code');
    const headers = {
      Cookie: '_strava4_session=ld2lto19an5lcded1fva6p9dvln7kcpm'
    };
    return this.http.post('https://www.strava.com/oauth/token', {headers}, {params});
  }

  getAthlete(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('https://www.strava.com/api/v3/athlete', {headers});
  }

  getListActivities(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('https://www.strava.com/api/v3/athlete/activities', {headers});
  }

  getActivity(token: string, id: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://www.strava.com/api/v3/activities/${id}?include_all_efforts=`, {headers});
  }
}
