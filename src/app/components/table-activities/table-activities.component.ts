import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table-activities',
  templateUrl: './table-activities.component.html',
  styleUrls: ['./table-activities.component.css']
})
export class TableActivitiesComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input() activities: any[];

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['Nom', 'Temps', 'Sport', 'Distance (km)', 'Vitesse moy. (km/h)', 'Vitesse max. (km/h)', 'FC moy. (bpm)', 'FC max. (bpm)', 'Date'];
  dataSource = new MatTableDataSource<any>();
  onChanges = new Subject<SimpleChanges>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.onChanges.subscribe(changes => this.dataSource.data = changes.activities.currentValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges.next(changes);
  }

  ngOnDestroy() {
    this.onChanges.complete();
  }

}
