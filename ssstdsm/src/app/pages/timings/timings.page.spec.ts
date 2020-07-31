import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimingsPage } from './timings.page';

describe('TimingsPage', () => {
  let component: TimingsPage;
  let fixture: ComponentFixture<TimingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
