import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, Input, Output, OnDestroy, OnInit, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OptionData } from './ngx-selects.interface';

@Component({
  selector: 'ngx-selects',
  template: `
    <div class="locdt">
      <div class="selects" (click)="open()" cdkOverlayOrigin #origin="cdkOverlayOrigin" #trigger>
        <div class="form-control" [ngClass]="{ 'is-open': panelOpen}">
          <span *ngIf="dataSelected.length === 0" class="text-empty">Choose a tag.</span>
          <div class="chip-list-wrapper">
            <span *ngFor="let item of dataSelected | slice:0:numberLimit" class="chip-tag">{{item.text}}</span>
            <ng-template [ngIf]="dataSelected.length - numberLimit > 0">
              <span class="chip-tag three-dot">...</span>
              <span class="chip-tag">{{dataSelected.length - numberLimit}}</span>
            </ng-template>
          </div>
          <svg [ngClass]="{ up: panelOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="#334155" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <ng-template cdkConnectedOverlay cdkConnectedOverlayHasBackdrop cdkConnectedOverlayLockPosition
      cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
      [cdkConnectedOverlayMinWidth]="_triggerRect?.width!" [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="panelOpen" (backdropClick)="close()">
      <div class="locdt" [ngStyle]="{'width': _triggerRect?.width! + 'px'}">
        <div class="options">
          <div class="search">
            <input placeholder="Search" [(ngModel)]="text" />
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="#334155"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="items">
            <div class="item" (click)="selectAll()">
              <span class="box select-all" [ngClass]="{ active: this.dataSelected.length === this.data.length}"></span>
              <span
                class="label select-all">{{this.dataSelected.length === this.data.length ? 'UnSelect all' : 'Select all'}}</span>
            </div>
          </div>
          <div class="items scroll">
            <div *ngFor="let item of data | filter:text " class="item" (click)="handleClick(item)">
              <span class="box" [ngClass]="{ 'active': isChecked(item)}"></span>
              <span class="label">{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: [
    './normalize.css',
    './ngx-selects.component.css'
  ],
})
export class NgxSelectsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() data: Array<OptionData> = [];
  @Input() numberLimit: number = 2;
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
      return obj.id === item.id
    })
    return result ? true : false;
  }

  handleClick(item: OptionData) {
    if (this.isChecked(item)) {
      this.removeItem(item);
    } else {
      this.dataSelected.push(item);
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
