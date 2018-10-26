import { Component, OnInit, Input } from "@angular/core";
import { Pagelink } from "../pagelink";
import { CompCommunicationService } from "../comp-communication.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input()
  linkReference: Pagelink[];
  showLogin: boolean;
  showLogout: boolean;
  constructor(private service: CompCommunicationService) {}

  ngOnInit() {
    this.service.currentStatus.subscribe(response => {
      if (response === "logged") {
        this.showLogin = false;
        this.showLogout = true;
      } else if (response == "logout") {
        this.showLogin = true;
        this.showLogout = false;
      }
    });
  }
}
