import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-undoredo',
  template: `
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
    <div>
      <button>Undo</button><button>Redo</button>
    </div>
  `,
  standalone: true
})
export class UndoredoComponent implements AfterViewInit {
  private eventTypes = [
    'input',
    'change',
    'click',
    //'keyup', 
    //'focus', 
    //'blur', 
    'submit'
  ];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const wrapper = this.el.nativeElement.querySelector('.wrapper');

    this.eventTypes.forEach(eventType => {
      this.renderer.listen(wrapper, eventType, (event: Event) => {
        this.handleEvent(event, eventType);
      });
    });
  }

  private handleEvent(event: Event, eventType: string) {
    // Prevent processing events from the wrapper itself
    if (event.target === event.currentTarget) return;

    console.log('Intercepted event:', {
      type: eventType,
      target: event.target,
      value: (event.target as any)?.value,
      timestamp: Date.now()
    });

    // Add custom logic here
    event.stopPropagation(); // Optional: prevent original propagation
  }
}
