import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { OptionData } from './ngx-selects.interface';

@Component({
  selector: 'ngx-selects',
  templateUrl: './ngx-selects.component.html',
  styleUrls: [
    './normalize.css',
    './ngx-selects.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgxSelectsComponent implements OnInit {

  @Input() data: Array<OptionData>;

  panelOpen = false;
  _triggerRect!: DOMRect;

  protected readonly _destroy = new Subject<void>();
  @ViewChild('trigger') trigger!: ElementRef;
  constructor(protected _viewportRuler: ViewportRuler, protected _changeDetectorRef: ChangeDetectorRef) {
    this.data = [
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
      }
    ]

  }

  ngOnInit(): void {
    // Check rect on resize
    this._viewportRuler
      .change()
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        if (this.panelOpen) {
          this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
          this._changeDetectorRef.markForCheck();
        }
      });
  }

  open() {
    // this.updateRect();
    // this.highlightOption();
    // this.keyManager.withHorizontalOrientation(null);
    this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
    this.panelOpen = !this.panelOpen;
  }

  close() {
    if (this.panelOpen) {
      this.panelOpen = false;
    }
  }

  isChecked(item: OptionData) {
    return false;
  }

  // private updateRect() {
  //   this.triggerRect = this.trigger.nativeElement.getBoundingClientRect();
  // }

}
