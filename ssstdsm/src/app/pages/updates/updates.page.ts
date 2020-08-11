import { Component, OnInit } from '@angular/core';
import { SlidesService, slide } from './../../services/slides.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {

  updateSlides: slide[];
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.getSlidesByType('templeConstruction').subscribe(res => {      
      this.updateSlides = res;
    });

  }

}
