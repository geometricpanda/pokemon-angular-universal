import {Directive, ElementRef, HostBinding, Inject, Input, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[appLazyLoadImg]',
})
export class LazyLoadImgDirective implements OnInit, OnDestroy {

  @HostBinding('attr.src')
  hbAttrSrc?: string | null;

  @Input() dataSrc?: string | null;

  intersectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersection();
    }
  }

  setupIntersection() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      const hasIntersection = entries.some(({isIntersecting}) => isIntersecting);
      if (hasIntersection) {
        this.hbAttrSrc = this.dataSrc;
        this.intersectionObserver?.disconnect();
        this.intersectionObserver = undefined;
      }
    });

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.intersectionObserver?.disconnect();
  }

}
