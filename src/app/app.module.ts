import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderBannerComponent } from './slider-banner/slider-banner.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes : Routes = [
  {path:'qui-sommes-nous' , component : QuiSommesNousComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderBannerComponent,
    QuiSommesNousComponent,
    TestingComponentComponent,
    SliderCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
     MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatCarouselModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
