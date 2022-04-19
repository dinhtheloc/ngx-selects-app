import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, Input, Output, OnDestroy, OnInit, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OptionData } from './ngx-selects.interface';

@Component({
  selector: 'ngx-selects',
  templateUrl: './ngx-selects.component.html',
  styleUrls: [
    './normalize.css',
    './overlay-prebuilt.css',
    './ngx-selects.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgxSelectsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() data: Array<OptionData> = [];
  @Input() numberLimit: number = 2;
  @Input() multiselect: boolean = false;
  @Input() placeholder: string = 'Choose a tag.';


  @Input()
  get store() {
    return this.dataSelected;
  }
  @Output() storeChange = new EventEmitter<Array<OptionData>>();
  set store(val) {
    this.dataSelected = val;
    this.storeChange.emit(this.dataSelected);
  }

  @ViewChild('trigger') trigger!: ElementRef;
  @ViewChild(CdkConnectedOverlay, { static: true }) private connectedOverlay!: CdkConnectedOverlay;

  dataSelected: Array<OptionData> = [];
  panelOpen = false;
  _triggerRect!: DOMRect;
  observer!: ResizeObserver;
  text = '';

  protected readonly _destroy = new Subject<void>();

  constructor(
    protected _viewportRuler: ViewportRuler) {

  }

  ngOnInit(): void {
    // Check rect on resize
    this._viewportRuler
      .change()
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        if (this.panelOpen) {
          this.updateRect();
        }
      });
  }

  ngAfterViewInit() {
    this.observer = new ResizeObserver(() => {
      if (this.connectedOverlay.overlayRef) this.connectedOverlay.overlayRef.updatePosition();
    });
    this.observer.observe(this.trigger.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this.trigger.nativeElement);
  }


  open() {
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
      return obj.id === item.id;
    })
    return result ? true : false;
  }

  handleClick(item: OptionData) {
    if (this.isChecked(item)) {
      this.removeItem(item);
    } else {
      if (this.multiselect) {
        this.dataSelected.push(item);
      } else {
        this.dataSelected = [item];
      }
    }
  }

  removeItem(item: OptionData) {
    this.dataSelected.splice(this.dataSelected.findIndex(obj => obj.id === item.id), 1);
  }

  selectAll() {
    this.dataSelected.length === this.data.length ? this.dataSelected = [] : this.dataSelected = [...this.data];
  }

  private updateRect() {
    this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
  }

}
