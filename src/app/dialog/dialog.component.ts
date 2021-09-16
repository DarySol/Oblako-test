import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
// import {Task} from "../app.component";
import {ThemePalette} from "@angular/material/core";
import {Training} from "../app.component";

export interface Task {
  name: string;
  done: boolean;
  subtasks?: Task[];
}

export interface NameList {
  name: string;
  done: boolean;
  nameElements?: NameList[];
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() test: string = null;
  @Output() btnClick = new EventEmitter();

  myBtnClick() {
    this.btnClick.emit();
  }

  users = '42 пользователя'

  public trainings:  Training[] = [
    {id:1, title:'Главные правила продаж'},
    {id:2, title:'Страхование без потерь'},
    {id:3, title:'Страховой случай или как помочь клиенту '}
  ];

  task: Task = {
    name: 'Все пользователи',
    done: false,
    subtasks: [
      {name: 'Максим Вильниц', done: false},
      {name: 'Ольга Крышкова', done: false},
      {name: 'Юлия Грунина', done: false},
      {name: 'Марат Большаков', done: false},
      {name: 'Светлана Иванова', done: false},
      {name: 'Данил Горбунов', done: false},
      {name: 'Дарья Васильева', done: false},
      {name: 'Владимир Силеванов', done: false}
    ]
  };

  nameList: NameList = {
    name: 'Все пользователи',
    done: false,
    nameElements: [
      {name: 'Максим Вильниц', done: false},
      {name: 'Ольга Крышкова', done: false},
      {name: 'Юлия Грунина', done: false},
      {name: 'Марат Большаков', done: false},
      {name: 'Светлана Иванова', done: false},
      {name: 'Данил Горбунов', done: false},
      {name: 'Дарья Васильева', done: false},
      {name: 'Владимир Силеванов', done: false}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.done);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.done).length > 0 && !this.allComplete;
  }

  // setAll(done: boolean) {
  //   this.allComplete = done;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach(t => t.done = done);
  // }

  removeRecord(name: string) {
    this.task.subtasks = this.task.subtasks.filter(t => t.name !== name)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
