import { JournalEntry } from './journal-entry';

describe('JournalEntry', () => {
  it('should create an instance', () => {
    expect(new JournalEntry(1, "My Entry", "Journal entry content", new Date(),
      new Date())).toBeTruthy();
  });
});
