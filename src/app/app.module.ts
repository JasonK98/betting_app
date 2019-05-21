// Pre-Defined Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Third Party Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatchesComponent } from './matches/matches.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
