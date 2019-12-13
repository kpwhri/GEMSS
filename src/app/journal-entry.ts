export class JournalEntry {

  constructor (
    public id: number,
    public title: string,
    public content: string,
    public created: Date,
    public updated: Date
    ) {}
}
