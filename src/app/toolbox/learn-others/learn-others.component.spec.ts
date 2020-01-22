import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOthersComponent } from './learn-others.component';

describe('LearnOthersComponent', () => {
  let component: LearnOthersComponent;
  let fixture: ComponentFixture<LearnOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
