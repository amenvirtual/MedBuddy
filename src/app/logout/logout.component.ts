import { Component, OnInit } from "@angular/core";
import { CompCommunicationService } from "../comp-communication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(
    private service: CompCommunicationService,
    private router: Router
  ) {}

  ngOnInit() {}
  logout() {
    this.service.changeStatus("logout");
    sessionStorage.removeItem("status");
    this.router.navigate(["login"]);
  }
}
