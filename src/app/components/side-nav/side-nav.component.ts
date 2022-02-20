import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

  public menuItems: any = [];

  constructor() { }

  ngOnInit(): void {
    this.mountMenu();
  }


  mountMenu(): void {
    this.menuItems = [
      {
        name: 'Menu',
        icon: 'fa-solid fa-align-justify',
        route: '/dashboard'
      },
      {
        name: 'Search',
        icon: 'fas fa-search',
        route: '/dashboard'
      },
      {
        name: 'Favorites',
        icon: 'fa-regular fa-star',
        route: '/cadastros',
      },
      {
        name: 'Chat',
        icon: 'fa-regular fa-comment-dots',
        route: '/cadastros',
      },
      {
        name: 'Statiscs',
        icon: 'fa-regular fa-chart-bar',
        route: '/cadastros',
      },
      {
        name: 'Banks',
        icon: 'fas fa-bank',
        route: '/cadastros',
      }
    ];
  }
}
