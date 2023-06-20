import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { BlogcomponentComponent } from './blogcomponent/blogcomponent.component';
import { ContactcomponentComponent } from './contactcomponent/contactcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutcomponentComponent,
    BlogcomponentComponent,
    ContactcomponentComponent,
    HomecomponentComponent,
    LogincomponentComponent,
    RegistercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
