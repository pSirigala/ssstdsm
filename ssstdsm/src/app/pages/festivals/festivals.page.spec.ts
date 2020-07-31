import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FestivalsPage } from './festivals.page';

describe('FestivalsPage', () => {
  let component: FestivalsPage;
  let fixture: ComponentFixture<FestivalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
