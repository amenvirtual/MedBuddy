import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ComponentAdderService {
  viewRef: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  setViewRef(viewRef: ViewContainerRef): void {
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any): void {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.injector);
    this.viewRef.insert(compRef.hostView);

    setTimeout(() => this.viewRef.detach(), 5000);
  }
}
