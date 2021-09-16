import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  programOptions: Observable<string[]>;

  sessions = '34 сесии'

  constructor() { }

  ngOnInit(): void {
    this.programOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
