import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'myworkspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  menuOptions = [
    {
      value: 'trucks',
      display: 'Truck'
    },
    {
      value: 'cargo-type',
      display: 'Cargo Type'
    },
    {
      value: 'truck-type',
      display: 'Truck Type'
    },
    {
      value: 'drivers',
      display: 'Driver'
    },
    {
      value: 'status',
      display: 'Truck Status'
    },
  ];
  selectMenu: FormControl = new FormControl('trucks');

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
        filter(ev => ev instanceof NavigationEnd), 
        take(1)).subscribe((event: NavigationEnd) => {
      const currentMenu = this.menuOptions.find(it => event.url.indexOf(it.value) > -1);
      if (currentMenu) { this.selectMenu.setValue(currentMenu.value); }
    });

    this.selectMenu.valueChanges.subscribe(menu => {
      if (menu) {
        this.router.navigate([menu, 'index']);
      }
    });
  }
}
