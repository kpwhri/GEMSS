export class JournalEntry {

  constructor(
    public id: number,
    public title: string,
    public entry: string,
    public created: Date,
    public updated: Date
  ) { }
}
