import { Directive, Renderer2, ElementRef, HostListener } from "@angular/core";
import { resetComponentState } from "@angular/core/src/render3/instructions";

@Directive({
  selector: "[appHighLight]"
})
export class HighLightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseover")
  change() {
    this.renderer.setStyle(this.el.nativeElement, "font-size", "1.8em");
  }

  @HostListener("mouseout")
  reset() {
    this.renderer.setStyle(this.el.nativeElement, "font-size", "1.0em");
  }
}
