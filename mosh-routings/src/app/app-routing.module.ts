import { FollowerPageComponent } from "./follower-page/follower-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "posts", component: PostsComponent },
  { path: "followers/:username", component: GithubFollowersComponent },
  { path: "followers/:id/:login", component: FollowerPageComponent },
  { path: "followers", component: GithubFollowersComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingsComponent = [
  HomePageComponent,
  PostsComponent,
  FollowerPageComponent,
  GithubFollowersComponent,
  NotFoundPageComponent
];
