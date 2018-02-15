//region Import
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PhraseModel } from '../shared/phrase.model'
import { PHRASES } from './phrase-mock'
//endregion Import

const numberInitialAttempts: number = 3

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  //region Variables
  public phrases: Array<PhraseModel> = PHRASES
  public phraseCurrent: PhraseModel
  public response: string = ''
  public numberAttempts: number = numberInitialAttempts
  public numberInitialAttempts: number = numberInitialAttempts
  public round: number = 0
  public progress: number = 0
  public titleButton: string = "Verificar resposta"
  @Output() public closeGame: EventEmitter<boolean> = new EventEmitter()
  //endregion Variables

  constructor() { this.updateCurrentPhrase() }

  //region Methods
  public checkAnswer(): void {
    if (this.response == this.phraseCurrent.phraseBr)
      this.refreshRound()
    else
      this.wrongTranslation()
  }

  private refreshRound(): void {
    this.response = ''
    this.round++
    this.progress += (100 / this.phrases.length)
    if (this.round < 4)
      this.updateCurrentPhrase()
    else this.closeGame.emit(true)
  }

  private updateCurrentPhrase(): void {
    this.phraseCurrent = this.phrases[this.round]
  }

  public updateResponse(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value
  }

  private wrongTranslation(): void {
    if (this.numberAttempts > 0)
      this.numberAttempts--
    if (this.numberAttempts == 0)
      this.closeGame.emit(false)
  }
  //endregion Methods

  ngOnInit() {
  }

}
