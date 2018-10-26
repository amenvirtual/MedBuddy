import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Doctor } from "../doctor";
import { ComponentAdderService } from "../component-adder.service";
import { ShowLocationComponent } from "../show-location/show-location.component";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  doctorList: Doctor[];
  codeNumber = 0;
  searchResult: string = "";

  @ViewChild("locationInfo", { read: ViewContainerRef })
  refToView: ViewContainerRef;

  constructor(private adderService: ComponentAdderService) {
    const ent = {
      id: 101,
      doctorName: "Dr.Ramesh",
      specialization: "ENT",
      mobileNumber: 9876565432,
      imageUrl: "./assets/images/doctor.jpg"
    };
    const skin = {
      id: 101,
      doctorName: "Dr.Suresh",
      specialization: "Skin",
      mobileNumber: 9876562131,
      imageUrl: "./assets/images/doctor.jpg"
    };
    this.doctorList = [ent, skin];
  }

  ngOnInit() {}

  onChange(val: string): void {
    this.searchResult = val;
  }

  add() {
    this.adderService.setViewRef(this.refToView);
    this.adderService.addComponent(ShowLocationComponent);
  }
}
