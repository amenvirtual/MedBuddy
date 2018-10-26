import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-find-service-area",
  templateUrl: "./find-service-area.component.html",
  styleUrls: ["./find-service-area.component.css"]
})
export class FindServiceAreaComponent implements OnInit {
  @Input()
  pincode: number;
  @Output()
  response: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendResponse() {
    let status = "Service Not Available";
    if (this.pincode % 2 == 0) {
      status = "Service Available";
    }
    this.response.emit(status + " for pincode " + this.pincode);
  }
}
