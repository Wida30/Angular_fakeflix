import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { TopListComponent } from './components/top-list/top-list.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TopListComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
