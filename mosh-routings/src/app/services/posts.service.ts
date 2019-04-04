import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService extends DataService {
  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/posts", http);
  }
}
