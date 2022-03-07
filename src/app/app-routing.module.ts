import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitteesComponent } from './committees/committees.component';
import { PersonalInformtionComponent } from './personal-informtion/personal-informtion.component';
import { TermsAndAgreementComponent } from './terms-and-agreement/terms-and-agreement.component';

const routes: Routes = [
  {path: "committees", component: CommitteesComponent},
  {path: "personalInformation", component: PersonalInformtionComponent},
  {path: "profileInformation", component: PersonalInformtionComponent},
  {path: "termsAndAgreement", component: TermsAndAgreementComponent},
  {path:"**", redirectTo: "committees"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
