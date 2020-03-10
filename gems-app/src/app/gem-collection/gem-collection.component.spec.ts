import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemCollectionComponent } from './gem-collection.component';

describe('GemCollectionComponent', () => {
  let component: GemCollectionComponent;
  let fixture: ComponentFixture<GemCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
