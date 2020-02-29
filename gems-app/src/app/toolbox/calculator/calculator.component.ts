import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

import { CalculatorService } from './calculator.service';

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  constructor() { }

  @Input() entry: JournalEntry;


  @Input(): packs: number;
  cost: number;
  weekly: number;
  monthly: number;
  yearly: number;

  calculatorForm = new FormGroup({
    packs: new FormControl(''),
    cost: new FormControl(''),
  });

  get_daily_cost(packs: number, cost: number) {
    return packs * cost;
  }

  get_savings(packs: number, cost: number, unit: string) {
    const dailyCost = this.get_daily_cost(packs, cost);
    if (unit === "week") {
      return dailyCost * 7;
    } else if (unit === "month") {
      return dailyCost * 30;
    } else if (unit === "year") {
      return dailyCost * 365;
    } else {
      return 0;
    }
  }

  onSubmit() {
    this.weekly = this.get_savings(this.packs, this.cost, "week");
    this.monthly = this.get_savings(this.packs, this.cost, "month");
    this.yearly = this.get_savings(this.packs, this.cost, "year");
  }

  ngOnInit() { }
}
