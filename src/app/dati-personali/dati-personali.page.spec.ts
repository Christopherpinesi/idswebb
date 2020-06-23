import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatiPersonaliPage } from './dati-personali.page';

describe('DatiPersonaliPage', () => {
  let component: DatiPersonaliPage;
  let fixture: ComponentFixture<DatiPersonaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatiPersonaliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatiPersonaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
