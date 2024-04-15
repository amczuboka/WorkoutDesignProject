import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { PointsComponent } from './pages/points/points.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
