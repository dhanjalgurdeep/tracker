import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "tracker",
  templateUrl: "./tracker.component.html",
  styleUrls: ["./tracker.component.scss"]
})
export class TrackerComponent implements OnInit {
  @Input() data: any[];
  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }
}
