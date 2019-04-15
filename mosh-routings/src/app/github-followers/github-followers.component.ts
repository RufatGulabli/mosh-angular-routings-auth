import { ActivatedRoute } from "@angular/router";
import { Follower } from "../models/Follower";
import { FollowersService } from "./../services/followers.service";
import { Component, OnInit } from "@angular/core";
import { combineLatest } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "githubfollowers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  public followers: Follower[];

  constructor(
    private followerService: FollowersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    combineLatest([
      this.activatedRoute.queryParamMap,
      this.activatedRoute.paramMap
    ])
      .pipe(
        switchMap(combined => {
          console.log(combined);
          return this.followerService.getAll();
        })
      )
      .subscribe(
        result => {
          this.followers = result;
        },
        error => {
          alert("Something went wrong");
        }
      );

    // this.followerService
    //   .getAll()
    //   .subscribe(followers => (this.followers = followers));

    // let username = this.activatedRoute.snapshot.paramMap.get("name");
    // console.log(username);

    // this.activatedRoute.queryParamMap.subscribe(response => {
    //   console.log(response);
    // });
  }
}
