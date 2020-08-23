import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { TableActivitiesComponent } from './components/table-activities/table-activities.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



import { DistancePipe } from './pipes/distance.pipe';
import { VitessePipe } from './pipes/vitesse.pipe';
import { TempsPipe } from './pipes/temps.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    AthleteComponent,
    DistancePipe,
    VitessePipe,
    TempsPipe,
    TableActivitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
