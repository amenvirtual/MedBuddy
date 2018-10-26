import { Component, OnInit } from "@angular/core";
import { CompCommunicationService } from "../comp-communication.service";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formConfig = [
    {
      label: "User Name",
      type: "text",
      name: "userName",
      constraint: Validators.required
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      constraint: Validators.required
    }
  ];

  constructor(
    private service: CompCommunicationService,
    private builder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.builder.group({});
    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(
        eachControl.name,
        new FormControl("", eachControl.constraint)
      );
    });
  }

  validate() {
    const uname = this.loginForm.controls.userName.value;
    const pword = this.loginForm.controls.password.value;

    if (uname === "india" && pword === "india") {
      this.service.changeStatus("logged");
      sessionStorage.setItem("status", "loggeduser");
      console.log(this.loginForm.value);
      this.router.navigate(["content"]);
    }
  }
}
