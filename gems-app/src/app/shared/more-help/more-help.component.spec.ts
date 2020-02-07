import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreHelpComponent } from './more-help.component';

describe('MoreHelpComponent', () => {
  let component: MoreHelpComponent;
  let fixture: ComponentFixture<MoreHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
