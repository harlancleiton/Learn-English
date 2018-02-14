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
  private phrases: Array<PhraseModel> = PHRASES
  private phraseCurrent: PhraseModel
  private response: string = ''
  private numberAttempts: number = numberInitialAttempts
  private numberInitialAttempts: number = numberInitialAttempts
  private round: number = 0
  private progress: number = 0
  private titleButton: string = "Verificar resposta"
  @Output() private closeGame: EventEmitter<boolean> = new EventEmitter()
  //endregion Variables

  constructor() { this.updateCurrentPhrase() }

  //region Methods
  private checkAnswer(): void {
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

  private updateResponse(response: Event): void {
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
