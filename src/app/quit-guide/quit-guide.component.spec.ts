import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitGuideComponent } from './quit-guide.component';

describe('QuitGuideComponent', () => {
  let component: QuitGuideComponent;
  let fixture: ComponentFixture<QuitGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuitGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
