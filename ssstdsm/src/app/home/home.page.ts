import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Our Mission & Vision',
      url: '/home/mission',
      icon: 'tv'      
    },
    {
      title: 'Aarti & Bhajan Timings',
      url: '/home/timings',
      icon: 'calendar'
    },
    {
      title: 'Sri Sai Satcharitra',
      url: '/home/history',
      icon: 'book'
    },
    {
      title: 'Festivals',
      url: '/home/festivals',
      icon: 'flame'
    },
    {
      title: 'Temple Contruction Updates',
      url: '/home/updates',
      icon: 'construct'
    },
    {
      title: 'Donations',
      url: '/home/donations',
      icon: 'cash'
    },
    {
      title: 'ContactUs',
      url: '/home/contactus',
      icon: 'warning'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
