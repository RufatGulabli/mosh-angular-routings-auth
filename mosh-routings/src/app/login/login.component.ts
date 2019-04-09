import { HttpErrorResponse } from "@angular/common/http";
import { User } from "./../models/User";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private credentials = new User();
  private errorText: HttpErrorResponse;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(value) {
    this.credentials.username = value.username;
    this.credentials.password = value.password;
    this.authService.login(value).subscribe(
      result => {
        if (result) this.router.navigate(["/followers"]);
      },
      (error: HttpErrorResponse) => {
        this.errorText = error;
      }
    );
  }
}
