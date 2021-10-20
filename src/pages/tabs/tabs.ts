import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { EventsPage } from '../events/events';
import { VideosPage } from '../videos/videos';
import { ProfilesPage } from '../profiles/profiles'
import { MorePage } from '../more/more'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = EventsPage;
  tab3Root = VideosPage;
  tab4Root = ProfilesPage;
  tab5Root = MorePage;

  constructor() {

  }
}
