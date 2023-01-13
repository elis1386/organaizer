import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {SelectorComponent} from './selector/selector.component';
import {OrganaizerComponent} from './organaizer/organaizer.component';
import {Moment1Pipe} from './shared/moment1.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelectorComponent,
    OrganaizerComponent,
    Moment1Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}