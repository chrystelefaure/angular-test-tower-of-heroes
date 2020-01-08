import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilListComponent } from './evil-list.component';

describe('EvilListComponent', () => {
  let component: EvilListComponent;
  let fixture: ComponentFixture<EvilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
