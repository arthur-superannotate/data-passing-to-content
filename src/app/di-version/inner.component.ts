import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BaseChangeState } from "../base-change-state";
import { AnyEventsService } from "./any-events.service";

@Component({
  selector: 'app-inner',
  template: `
    <div [class]="state ? 'success' : 'error'"><ng-content></ng-content>{{state ? 'Success' : 'Error'}}</div>
  `,
})
export class InnerComponent extends BaseChangeState implements OnInit, OnDestroy {

  private readonly _subscriptions = new Subscription();

  constructor(private readonly _anyEventsService: AnyEventsService) { super() }

  ngOnInit() {
    const subscription = this._anyEventsService.listen().subscribe(this.chnageState.bind(this));
    this._subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

}