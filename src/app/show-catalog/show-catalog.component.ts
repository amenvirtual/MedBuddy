import { Component, OnInit } from "@angular/core";
import { BuddyAPIService } from "../buddy-api.service";
import { Catalog } from "../catalog";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-show-catalog",
  templateUrl: "./show-catalog.component.html",
  styleUrls: ["./show-catalog.component.css"]
})
export class ShowCatalogComponent implements OnInit {
  catalog: Catalog[];
  constructor(
    private service: BuddyAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(rparams => {
      const catId = rparams["code"];
      console.log(catId);
      if (catId == 101) {
        this.router.navigate(["medicine"]);
      }
    });
    this.service.getCatalog().subscribe(resp => (this.catalog = resp));
  }
}
