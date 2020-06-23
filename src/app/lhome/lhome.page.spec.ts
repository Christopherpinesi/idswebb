import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LhomePage } from './lhome.page';

describe('LhomePage', () => {
  let component: LhomePage;
  let fixture: ComponentFixture<LhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
