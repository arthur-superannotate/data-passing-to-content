export abstract class BaseChangeState {
  public state: boolean = false;

  chnageState(state: boolean): void {
    this.state = state;
  }

}
