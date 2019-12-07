import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalNewComponent } from './journal-new.component';

describe('JournalNewComponent', () => {
  let component: JournalNewComponent;
  let fixture: ComponentFixture<JournalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
