// Pre-Defined Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Third Party Modules
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
