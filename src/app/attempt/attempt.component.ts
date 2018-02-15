import { Component, OnInit, Input } from '@angular/core';
import { HeartModel } from '../shared/heart.model'

const numberAttempts: number = 3

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  private heart: HeartModel = new HeartModel()
  @Input() public srcImage: string

  constructor() { }

  public getSrc(): string {
    if (this.heart.isFull)
      return this.heart.pathHeartFull
    else return this.heart.pathHeartEmpty
  }

  public changeStatus() {
    if (this.heart.isFull) {
      this.heart.isFull = false
    }
    else {
      this.heart.isFull = true
    }
  }

  ngOnInit() {
  }

}
