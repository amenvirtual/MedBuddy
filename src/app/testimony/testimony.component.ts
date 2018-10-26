import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";

@Component({
  selector: "app-testimony",
  templateUrl: "./testimony.component.html",
  styleUrls: ["./testimony.component.css"]
})
export class TestimonyComponent implements OnInit {
  customerList: Customer[];

  constructor() {
    const ent = {
      id: 101,
      customerName: "Sakthi",
      review: "Good doctor. 5 Star"
    };
    const skin = {
      id: 101,
      customerName: "Saravana",
      review: "Excellent care !!!"
    };
    this.customerList = [ent, skin];
  }

  ngOnInit() {}
}
