import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilEditComponent } from './evil-edit.component';

describe('EvilEditComponent', () => {
  let component: EvilEditComponent;
  let fixture: ComponentFixture<EvilEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvilEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
