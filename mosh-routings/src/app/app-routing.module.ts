import { AdminComponent } from "./admin/admin.component";
import { FollowerPageComponent } from "./follower-page/follower-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { PostsComponent } from "./posts/posts.component";
import { LoginComponent } from "./login/login.component";
import { NoAccessComponent } from "./no-access/no-access.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "posts", component: PostsComponent },
  { path: "followers/:username", component: GithubFollowersComponent },
  { path: "followers/:id/:login", component: FollowerPageComponent },
  { path: "followers", component: GithubFollowersComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "noaccess", component: NoAccessComponent },
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
  LoginComponent,
  NoAccessComponent,
  AdminComponent,
  NotFoundPageComponent
];
