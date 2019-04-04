import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "follower-page",
  templateUrl: "./follower-page.component.html",
  styleUrls: ["./follower-page.component.css"]
})
export class FollowerPageComponent implements OnInit {
  constructor(private routes: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.routes.navigate(["/followers"], {
      queryParams: {
        email: "gulabli.rufat@gmail.com",
        age: 32
      }
    });
  }
}
