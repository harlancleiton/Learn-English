import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AttemptComponent } from './attempt/attempt.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { AttemptsBarComponent } from './attempts-bar/attempts-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    ProgressbarComponent,
    AttemptComponent,
    TextAreaComponent,
    ButtonSubmitComponent,
    AttemptsBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
