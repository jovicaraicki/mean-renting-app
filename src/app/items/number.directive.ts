import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  // constructor(private el: ElementRef) { }

  // @HostListener('input', ['$event']) onInputChange(event) {
  //   const initalValue = this.el.nativeElement.value;
  //   this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
  //   if ( initalValue !== this.el.nativeElement.value) {
  //     event.stopPropagation();
  //   }
  // }

  @HostListener('keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
      const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (event.key.length === 1 && !(nums.includes(event.key))) {
          event.preventDefault();
      }
  }

}
