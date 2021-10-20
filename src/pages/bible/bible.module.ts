import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiblePage } from './bible';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BiblePage,
  ],
  imports: [
    IonicPageModule.forChild(BiblePage),
    PipesModule
  ],
})
export class BiblePageModule {}
