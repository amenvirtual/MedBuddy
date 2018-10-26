import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CompCommunicationService {
  loginStatus: BehaviorSubject<string> = new BehaviorSubject<string>("");

  currentStatus = this.loginStatus.asObservable();
  constructor() {}

  changeStatus(status: string) {
    this.loginStatus.next(status);
  }
}
