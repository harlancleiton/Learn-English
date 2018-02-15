import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app';
  public gameRunning: boolean = true
  public won: boolean

  public closeGame(won: boolean): void {
    console.log(won)
    this.gameRunning = false
    this.won = won
  }

  public restartGame(): void {
    this.gameRunning = true
  }

  ngOnDestroy() {
    console.log('Componente panel destruído')
  }

  ngOnInit() {
  }
}