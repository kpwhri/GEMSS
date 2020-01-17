import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { JournalImageComponent } from './journal-image.component';

describe('JournalImageComponent', () => {
  let component: JournalImageComponent;
  let fixture: ComponentFixture<JournalImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalImageComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
