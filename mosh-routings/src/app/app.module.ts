import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingsComponent } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostsComponent } from "./posts/posts.component";
import { FollowerPageComponent } from "./follower-page/follower-page.component";

@NgModule({
  declarations: [
    AppComponent,
    RoutingsComponent,
    HomePageComponent,
    PostsComponent,
    FollowerPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
