import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Para o ngModel
import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
