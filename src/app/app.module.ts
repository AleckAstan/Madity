import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderBannerComponent } from './slider-banner/slider-banner.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { CommentComponent } from './comment/comment.component';
import { MoreInformationComponent } from './more-information/more-information.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderCardMdbComponent } from './slider-card-mdb/slider-card-mdb.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';

const appRoutes: Routes = [
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderBannerComponent,
    QuiSommesNousComponent,
    TestingComponentComponent,
    CommentComponent,
    MoreInformationComponent,
    FooterComponent,
    SliderCardMdbComponent,
  ],
  imports: [
    [IvyCarouselModule],
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatCarouselModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
