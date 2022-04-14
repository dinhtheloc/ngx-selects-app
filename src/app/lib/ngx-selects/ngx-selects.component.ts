import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
@Component({
  selector: 'ngx-selects',
  templateUrl: './ngx-selects.component.html',
  styleUrls: [
    './normalize.css',
    './ngx-selects.component.css'
  ]
})
export class NgxSelectsComponent implements OnInit {
  portal!: ComponentPortal<NgxSelectsComponent>;
  @ViewChild('tpl', { read: TemplateRef }) tpl!: TemplateRef<any>;
  constructor(private overlay: Overlay, private vcr: ViewContainerRef,) { }

  ngOnInit(): void {
  }

  init() {
    const overlayRef = this.overlay.create();
    overlayRef.attach(new TemplatePortal<any>(this.tpl, this.vcr));
  }

  private setOverlayPosition(positionStrategy: FlexibleConnectedPositionStrategy) {
    const positions: ConnectedPosition = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
    };
    positionStrategy.withPositions([positions]);
  }

}
