import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StepService {

  constructor(private router: Router) { }

  onRead() {
    // mark as read somehow before navigation
    // will want to extract this to step.service
    this.router.navigate(['step', '1']);
  }
}
