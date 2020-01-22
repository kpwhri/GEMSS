import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  private packs: number;
  private cost: number;
  private weekly: number;
  private monthly: number;
  private yearly: number;

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

  ngOnInit() {}
}
