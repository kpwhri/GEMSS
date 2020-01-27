import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkBackComponent } from './talk-back.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

describe('TalkBackComponent', () => {
  let component: TalkBackComponent;
  let fixture: ComponentFixture<TalkBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkBackComponent ],
      imports: [ BrowserAnimationsModule,  MatExpansionModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
