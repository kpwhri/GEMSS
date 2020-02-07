import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOthersComponent } from './learn-others.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

describe('LearnOthersComponent', () => {
  let component: LearnOthersComponent;
  let fixture: ComponentFixture<LearnOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnOthersComponent ],
      imports: [ BrowserAnimationsModule, MatExpansionModule ]
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
