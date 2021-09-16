import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
// import {TableDate} from "../app.component";


export interface PeriodicElement {
  date: string;
  title: string;
  member: number;
  tutor: string;
  progress: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', member: 12, tutor: ' ', progress: 90, actions:''},
  {date: '23 дек, 9:00', title: 'Главные правила продаж', member: 10, tutor: ' ', progress: 90, actions:''},
  {date: '23 дек, 9:00', title: 'Первичное обучение КС', member: 8, tutor: ' ', progress: 86, actions:''},
  {date: '23 дек, 9:00', title: 'Вторичное обучение КС', member: 18, tutor: ' ', progress: 82, actions:''},
  {date: '23 дек, 9:00', title: 'Вклады: теория и практика', member: 6, tutor: ' ', progress: 79, actions:''},
  {date: '23 дек, 9:00', title: 'Очное обучение менеджеров', member: 20, tutor: ' ', progress: 73, actions:''},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent {
  displayedColumns: string[] = ['date', 'title', 'member', 'tutor', 'progress', 'actions'];
  dataSource = ELEMENT_DATA;

  onRemoveClick(title: string) {
    // this.dataSource.splice(title)
    this.dataSource = this.dataSource.filter(t => t.title !== title)
  }

  getMemberColumnTitle(elem: any): string {
    return elem.clientWidth > 100 ? 'Участников' : 'Уч.';
  }

}

  // @Input() tableData: TableDate[] = []

//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
