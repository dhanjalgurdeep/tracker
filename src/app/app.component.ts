import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "tracker";
  data = [
    {
      status: "done",
      eventname: "Initiated"
    },
    {
      status: "done",
      eventname: "Init Review"
    },
    {
      status: "done",
      eventname: "Secondary Review"
    },
    {
      status: "Todo",
      eventname: "Approval"
    }
  ];
}
