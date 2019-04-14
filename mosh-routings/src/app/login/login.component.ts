import { HttpErrorResponse } from "@angular/common/http";
import { User } from "./../models/User";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private credentials = new User();
  private errorText: HttpErrorResponse;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {}

  login(value) {
    this.credentials.username = value.username;
    this.credentials.password = value.password;
    this.authService.login(value).subscribe(
      result => {
        const returnUrl = this.activatedRouter.snapshot.queryParamMap.get(
          "returnUrl"
        );
        if (result) this.router.navigate([returnUrl || "/home"]);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.errorText = error;
      }
    );
  }
}
