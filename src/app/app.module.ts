import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { VideoComponent } from './video/video.component';
import { UnamasComponent } from './unamas/unamas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    FormComponent,
    TablaComponent,
    VideoComponent,
    UnamasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
