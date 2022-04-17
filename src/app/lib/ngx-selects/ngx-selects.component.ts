import { CdkConnectedOverlay, Overlay } from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  dataSelected: Array<OptionData> = [];

  panelOpen = false;
  _triggerRect!: DOMRect;

  protected readonly _destroy = new Subject<void>();
  @ViewChild('trigger') trigger!: ElementRef;
  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay!: CdkConnectedOverlay;
  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    protected _viewportRuler: ViewportRuler, protected _changeDetectorRef: ChangeDetectorRef) {
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
          this.updateRect();
          this._changeDetectorRef.markForCheck();
        }
      });
  }


  open() {
    // ----
    this.updateRect();
    this.panelOpen = !this.panelOpen;
  }

  close() {
    if (this.panelOpen) {
      this.panelOpen = false;
    }
  }

  isChecked(item: OptionData) {
    const result = this.dataSelected.find(obj => {
      return obj.id === item.id
    })
    return result ? true : false;
  }


  private updateRect() {
    this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
  }

  handleClick(item: OptionData) {
    if (this.isChecked(item)) {
      this.removeItem(item);
    } else {
      this.dataSelected.push(item);
    }
    setTimeout(() => {
      this.connectedOverlay.overlayRef.updatePosition();
    });
  }

  removeItem(item: OptionData) {
    this.dataSelected.splice(this.dataSelected.findIndex(obj => obj.id === item.id), 1);
  }

}
