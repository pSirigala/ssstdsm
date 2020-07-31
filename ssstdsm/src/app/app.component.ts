import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
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
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
