import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AttemptComponent } from '../attempt/attempt.component'

@Component({
  selector: 'app-attempts-bar',
  templateUrl: './attempts-bar.component.html',
  styleUrls: ['./attempts-bar.component.css']
})
export class AttemptsBarComponent implements OnInit, OnChanges {

  @Input() public numberAttempts: number = 0
  @Input() public numberInitialAttempts: number
  public attempts: Array<AttemptComponent> = new Array<AttemptComponent>()

  constructor() { console.log('numberAttempts constructor:' + this.numberAttempts) }

  private fillBar(): Array<AttemptComponent> {
    let aux: Array<AttemptComponent> = new Array<AttemptComponent>()
    for (var i = 0; i < this.numberInitialAttempts; i++) {
      aux.push(new AttemptComponent())
    }
    return aux
  }

  ngOnChanges() {
    if (this.attempts.length > 0)
      if (this.numberAttempts != this.attempts.length) {
        let i: number = this.attempts.length - this.numberAttempts
        this.attempts[i - 1].changeStatus()
      }
  }

  ngOnInit() {
    this.attempts = this.fillBar()
  }
}