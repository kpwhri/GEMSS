import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemTopViewComponent } from './gem-top-view.component';

describe('GemTopViewComponent', () => {
  let component: GemTopViewComponent;
  let fixture: ComponentFixture<GemTopViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemTopViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
