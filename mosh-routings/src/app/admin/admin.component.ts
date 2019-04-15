import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
