import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IbHeaderComponent } from './ib-header/ib-header.component';
import { IbSidenavComponent } from './ib-sidenav/ib-sidenav.component';
import { IbContentComponent } from './ib-content/ib-content.component';
import { CommitteesComponent } from './committees/committees.component';
import { PersonalInformtionComponent } from './personal-informtion/personal-informtion.component';
import { ProfileInformtionComponent } from './profile-informtion/profile-informtion.component';
import { TermsAndAgreementComponent } from './terms-and-agreement/terms-and-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    IbHeaderComponent,
    IbSidenavComponent,
    IbContentComponent,
    CommitteesComponent,
    PersonalInformtionComponent,
    ProfileInformtionComponent,
    TermsAndAgreementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
