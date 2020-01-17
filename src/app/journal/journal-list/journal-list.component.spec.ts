import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { JournalImageComponent } from "../journal-image/journal-image.component";
import { JournalListComponent } from "./journal-list.component";

describe("JournalListComponent", () => {
  let component: JournalListComponent;
  let fixture: ComponentFixture<JournalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JournalImageComponent, JournalListComponent],
      imports: [HttpClientTestingModule, MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
