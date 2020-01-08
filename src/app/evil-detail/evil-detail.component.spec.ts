import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilDetailComponent } from './evil-detail.component';

describe('EvilDetailComponent', () => {
  let component: EvilDetailComponent;
  let fixture: ComponentFixture<EvilDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvilDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
