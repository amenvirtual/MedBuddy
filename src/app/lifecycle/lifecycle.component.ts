import {
  Component,
  OnInit,
  SimpleChanges,
  Input,
  OnDestroy,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { TestimonyComponent } from "../testimony/testimony.component";

@Component({
  selector: "app-lifecycle",
  templateUrl: "./lifecycle.component.html",
  styleUrls: ["./lifecycle.component.css"]
})
export class LifecycleComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input()
  city;

  @ViewChild(TestimonyComponent)
  child: TestimonyComponent;
  constructor() {
    //alert("constructor called");
    console.log("constructor called");
  }

  ngOnChanges(cnanges: SimpleChanges) {
    //alert("on changes called");
    console.log("on changes called");
  }

  ngOnInit() {
    //alert("on init called");
    console.log("on init called");
  }

  ngOnDestroy(): void {
    console.log("on destroy called");
  }

  ngAfterViewInit(): void {
    console.log("after view called");
    this.child.customerList.push({
      id: 200,
      customerName: "Rajesh",
      review: "Wow super"
    });
  }
}
