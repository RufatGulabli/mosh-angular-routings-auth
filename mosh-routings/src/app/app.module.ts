import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, RoutingsComponent } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostsComponent } from "./posts/posts.component";
import { FollowerPageComponent } from "./follower-page/follower-page.component";
import { LoginComponent } from "./login/login.component";
import { NoAccessComponent } from "./no-access/no-access.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AdminGuard } from "./services/admin-guard.service";

@NgModule({
  declarations: [
    PostsComponent,
    HomePageComponent,
    AppComponent,
    RoutingsComponent,
    FollowerPageComponent,
    LoginComponent,
    NoAccessComponent,
    AdminComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
