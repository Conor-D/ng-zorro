import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresserComponent } from './progresser.component';

describe('ProgresserComponent', () => {
  let component: ProgresserComponent;
  let fixture: ComponentFixture<ProgresserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
