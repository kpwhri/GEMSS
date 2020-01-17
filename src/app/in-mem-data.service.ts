import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

import { JournalEntry } from "./journal/journal-entry";

@Injectable({
  providedIn: "root"
})
export class InMemDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const journalEntries: JournalEntry[] = [
      {
        id: 1,
        title: "I'm thinking through an important life decision",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        created: new Date(),
        updated: new Date()
      },
      {
        id: 2,
        title: "Just some thoughts",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        created: new Date(),
        updated: new Date()
      },
      {
        id: 3,
        title: "Ups and downs",
        content:
          "Purus sit amet volutpat consequat. Ornare arcu dui vivamus arcu felis bibendum ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.",
        created: new Date(),
        updated: new Date()
      }
    ];
    return { journalEntries };
  }
}
