import { Component, OnInit } from '@angular/core';
import { OptionData } from 'ngx-selects';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


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
      text: 'Family 2'
    },
    {
      id: 9,
      text: 'Family in Law 2'
    },
    {
      id: 10,
      text: 'Co-workers 2'
    },
    {
      id: 11,
      text: 'Hockey club 2'
    },
    {
      id: 12,
      text: 'Startup Investing. Simplified 2.'
    },
    {
      id: 13,
      text: 'Swiss Embassy 2'
    },
    {
      id: 14,
      text: 'Zurich Hike & Outdoor. 16,170 InternationalOutdoorEnthusiasts 2.'
    }
  ]

  dataSelected: OptionData[] = [];
}
