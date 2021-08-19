import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AnyEventsService {

  private _events: Subject<boolean> = new Subject();

  public listen(): Observable<boolean> {
    return this._events.asObservable();
  }

  public dispatchEvent(val: boolean): void {
    this._events.next(val);
  }
  
}