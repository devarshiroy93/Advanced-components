import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appIntersectionobserver]',
  standalone: true
})
export class IntersectionobserverDirective implements OnInit {

  @Output()
  isIntersecting: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private el: ElementRef) { }

  hasInitialised: boolean = false;

  ngOnInit(): void {
    this.watchElementForEntry();
  }

  watchElementForEntry() {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!this.hasInitialised) {
          this.hasInitialised = true; // Skip the first trigger
          continue;
        }
        this.emitIsEntryValue(!!entry.isIntersecting);
      }
    });

    observer.observe(this.el.nativeElement);
  }

  emitIsEntryValue(value: boolean) {
    this.isIntersecting.emit(value);
  }

}
