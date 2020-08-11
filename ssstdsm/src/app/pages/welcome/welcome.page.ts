import { Component, OnInit } from '@angular/core';
import { SlidesService, slide } from './../../services/slides.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  slides: slide[];
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.getSlidesByType('home').subscribe(res => {
      this.slides = res;
    });
  }

}
