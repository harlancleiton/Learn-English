import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app';
  private gameRunning: boolean = true
  private won: boolean

  public closeGame(won: boolean): void {
    console.log(won)
    this.gameRunning = false
    this.won = won
  }

  private restartGame(): void {
    this.gameRunning = true
  }

  ngOnDestroy() {
    console.log('Componente panel destruído')
  }

  ngOnInit() {
  }
}