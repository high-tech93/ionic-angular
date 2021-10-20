import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileArticlePage } from './profile-article';

@NgModule({
  declarations: [
    ProfileArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileArticlePage),
  ],
})
export class ProfileArticlePageModule {}
