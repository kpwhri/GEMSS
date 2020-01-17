import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JournalService } from './journal.service';

describe('JournalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ JournalService ]
  }));

  it('should be created', () => {
    const service: JournalService = TestBed.get(JournalService);
    expect(service).toBeTruthy();
  });
});
