import { Component, OnInit } from "@angular/core";
import { BuddyAPIService } from "../buddy-api.service";
import { Transaction } from "../transaction";

@Component({
  selector: "app-show-transaction-history",
  templateUrl: "./show-transaction-history.component.html",
  styleUrls: ["./show-transaction-history.component.css"]
})
export class ShowTransactionHistoryComponent implements OnInit {
  hisdata: Transaction[];
  searchCondition = "";
  pageNumber = 0;

  constructor(private service: BuddyAPIService) {}

  ngOnInit() {
    this.service.getTxHistory().subscribe(resp => (this.hisdata = resp));
  }
}
