import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { ManageAppointmentComponent } from "./manage-appointment/manage-appointment.component";

@Injectable({
  providedIn: "root"
})
export class UniversalGuardGuard implements CanActivate, CanDeactivate<{}> {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let result = false;
    const status = sessionStorage.getItem("status");
    if (status === "loggeduser") {
      result = true;
    }
    if (!result) {
      this.router.navigate(["login"]);
    }
    return result;
  }

  canDeactivate(
    comp: any,
    currentRoot: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ) {
    const refComp = <ManageAppointmentComponent>comp;
    let message = "Are you sure?";
    if (refComp != undefined) {
      if (refComp.form.dirty || !refComp.form.submitted) {
        message = "You had not submitted the form - Are you sure to exit?";
      }
    }
    return window.confirm(message);
  }
}
