import { Component, OnInit } from "@angular/core";
import { Pagelink } from "../pagelink";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  heading: string = "Medical Buddy";
  logo = "assets/images/logo.png";
  links: Pagelink[];
  constructor() {
    this.links = [
      { linkRef: "content", linkText: "Home" },
      { linkRef: "catalog", linkText: "Catalog" },
      { linkRef: "history", linkText: "View History" },
      { linkRef: "appointment", linkText: "Fix Appointment" },
      { linkRef: "login", linkText: "Login" }
    ];
  }

  ngOnInit() {}
}
