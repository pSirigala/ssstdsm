import { Component, OnInit } from '@angular/core';
import {event, EventsService } from './../../services/events-service.service';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.page.html',
  styleUrls: ['./festivals.page.scss'],
})
export class FestivalsPage implements OnInit {
  events:event[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(res => {
      this.events = res;
    });
  }

}
