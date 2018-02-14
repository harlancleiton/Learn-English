//region Import
import { Component, OnInit } from '@angular/core';
import { PhraseModel } from '../shared/phrase.model'
import { PHRASES } from './phrase-mock'
//endregion Import

const numberInitialAttempts: number = 3
let numberAttempts = numberInitialAttempts

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
  private numberAttempts: number = numberAttempts
  private numberInitialAttempts: number = numberInitialAttempts
  private round: number = 0
  private progress: number = 0
  private titleButton: string = "Verificar resposta"
  //endregion Variables

  constructor() { this.updateCurrentPhrase() }

  //region Methods
  private checkAnswer(): void {
    if (this.response == this.phraseCurrent.phraseBr) {
      alert("Acertou")
      this.refreshRound()
    } else {
      this.wrongTranslation()
      alert("Errou")
    }
  }

  private refreshRound(): void {
    this.response = ''
    this.round++
    this.progress += (100 / this.phrases.length)
    this.updateCurrentPhrase()

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
    else alert('Você ja utilizou todas suas chances.')
  }
  //endregion Methods

  ngOnInit() {
  }

}
