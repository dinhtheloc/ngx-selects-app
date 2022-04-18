import { Component } from '@angular/core';
import {OptionData} from './lib/ngx-selects/ngx-selects.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-selects-app';

  data: OptionData[] = [
    {
      id: 1,
      text: 'Family'
    },
    {
      id: 2,
      text: 'Family in Law'
    },
    {
      id: 3,
      text: 'Co-workers'
    },
    {
      id: 4,
      text: 'Hockey club'
    },
    {
      id: 5,
      text: 'Startup Investing. Simplified.'
    },
    {
      id: 6,
      text: 'Swiss Embassy'
    },
    {
      id: 7,
      text: 'Zurich Hike & Outdoor. 16,170 InternationalOutdoorEnthusiasts.'
    },
    {
      id: 8,
      text: 'Family'
    },
    {
      id: 9,
      text: 'Family in Law'
    },
    {
      id: 10,
      text: 'Co-workers'
    },
    {
      id: 11,
      text: 'Hockey club'
    },
    {
      id: 12,
      text: 'Startup Investing. Simplified.'
    },
    {
      id: 13,
      text: 'Swiss Embassy'
    },
    {
      id: 14,
      text: 'Zurich Hike & Outdoor. 16,170 InternationalOutdoorEnthusiasts.'
    }
  ]

  dataSelected: OptionData[]  = [];
  // [
  //   {
  //     id: 1,
  //     text: 'Family'
  //   },
  //   {
  //     id: 2,
  //     text: 'Family in Law'
  //   },
  //   {
  //     id: 3,
  //     text: 'Co-workers'
  //   },
  //   {
  //     id: 4,
  //     text: 'Hockey club'
  //   },
  //   {
  //     id: 5,
  //     text: 'Startup Investing. Simplified.'
  //   },
  //   {
  //     id: 6,
  //     text: 'Swiss Embassy'
  //   },
  //   {
  //     id: 7,
  //     text: 'Zurich Hike & Outdoor. 16,170 InternationalOutdoorEnthusiasts.'
  //   },
  //   {
  //     id: 8,
  //     text: 'Family'
  //   },
  //   {
  //     id: 9,
  //     text: 'Family in Law'
  //   },
  //   {
  //     id: 10,
  //     text: 'Co-workers'
  //   },
  //   {
  //     id: 11,
  //     text: 'Hockey club'
  //   },
  //   {
  //     id: 12,
  //     text: 'Startup Investing. Simplified.'
  //   },
  //   {
  //     id: 13,
  //     text: 'Swiss Embassy'
  //   },
  //   {
  //     id: 14,
  //     text: 'Zurich Hike & Outdoor. 16,170 InternationalOutdoorEnthusiasts.'
  //   }
  // ]
}
