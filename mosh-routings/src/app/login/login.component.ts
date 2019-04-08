import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  credentials: {
    username: string;
    password: string;
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(value) {
    console.log(value);
    // this.credentials.username = value.username;
    // this.credentials.password = value.password;
    // this.authService.login(value);
  }
}
