import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    SubjectsListComponent,
    TimetableComponent,
    SearchBarComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
