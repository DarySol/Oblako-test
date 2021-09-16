import {Component, ViewEncapsulation, OnInit, ViewChild} from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

export interface Training{
  id:number
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{

  @ViewChild('drawer') drawer: MatDrawer;

  // toggleDrawer() {
  //   this.drawer.toggle();
  // }

  drawerClose() {
    this.drawer.toggle();
  }

  appTitle = 'Планирование'
  strPath = 'Главная - Планирование'
  // private iconRegistry: any;

  ngOnInit() {
  }
  constructor( private matIconRegistry: MatIconRegistry,
               private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      'filter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/filter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'pencil',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/pencil.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'planing',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/planing.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'progressing',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/progressing.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/search.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'avatar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/avatar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/calendar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'time',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/time.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'close',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/close.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'dragndrop',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dragndrop.svg')
    );
  };


  // public initCustomIcons() {
  //   console.log('registered.');
  //
  // }

}
