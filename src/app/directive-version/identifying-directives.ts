import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[appInner]'
})
export class InnerDirective<T> {
  constructor(public templateRef: TemplateRef<T>) { }
}