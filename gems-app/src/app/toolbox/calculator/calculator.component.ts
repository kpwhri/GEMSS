import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

import { CalculatorService } from './calculator.service';

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) { }

  @Input() packs_per_day: number;
  @Input() cost_per_pack: number;
  weekly: number;
  monthly: number;
  yearly: number;

  calculatorForm = new FormGroup({
    packs_per_day: new FormControl(''),
    cost_per_pack: new FormControl(''),
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
    this.packs_per_day = this.calculatorForm.value.packs_per_day;
    this.cost_per_pack = this.calculatorForm.value.cost_per_pack;
    this.weekly = this.get_savings(this.packs_per_day, this.cost_per_pack, "week");
    this.monthly = this.get_savings(this.packs_per_day, this.cost_per_pack, "month");
    this.yearly = this.get_savings(this.packs_per_day, this.cost_per_pack, "year");
    this.calculatorService.saveCalculation(this.calculatorForm.value);
  }

  ngOnInit() { }
}
