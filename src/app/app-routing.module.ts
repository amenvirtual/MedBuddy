import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ContentComponent } from "./content/content.component";
import { ShowCatalogComponent } from "./show-catalog/show-catalog.component";
import { ShowTransactionHistoryComponent } from "./show-transaction-history/show-transaction-history.component";
import { ManageAppointmentComponent } from "./manage-appointment/manage-appointment.component";
import { LogoutComponent } from "./logout/logout.component";
import { UniversalGuardGuard } from "./universal-guard.guard";
import { MedicineComponent } from "./medicine/medicine.component";
import { SchedulehComponent } from "./scheduleh/scheduleh.component";
import { SchedulekComponent } from "./schedulek/schedulek.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  {
    path: "medicine",
    component: MedicineComponent,
    children: [
      { path: "herbal", component: SchedulehComponent, outlet: "herby" },
      { path: "indian", component: SchedulekComponent, outlet: "indy" }
    ]
  },
  {
    path: "content",
    component: ContentComponent,
    canActivate: [UniversalGuardGuard]
  },
  {
    path: "catalog",
    component: ShowCatalogComponent,
    canActivate: [UniversalGuardGuard]
  },
  {
    path: "catalog/:code",
    component: ShowCatalogComponent,
    canActivate: [UniversalGuardGuard]
  },
  {
    path: "history",
    component: ShowTransactionHistoryComponent,
    canDeactivate: [UniversalGuardGuard]
  },
  {
    path: "appointment",
    component: ManageAppointmentComponent,
    canDeactivate: [UniversalGuardGuard]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
