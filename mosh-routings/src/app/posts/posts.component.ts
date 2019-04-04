import { PostsService } from "./../services/posts.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppError } from "../custom-errors/AppError";
import { NotFoundError } from "../custom-errors/NotFoundError";
import { Todo } from "../models/Todo";
import { BadInput } from "../custom-errors/BadInput";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("On Destroy");
  }
  public posts: Todo[];
  public errorMessage: AppError;
  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      response => {
        this.posts = response;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          this.errorMessage = error;
        } else {
          throw error;
        }
      }
    );
  }

  addTodo(newTodo: HTMLInputElement) {
    let post = new Todo();
    post.title = newTodo.value;
    this.posts.splice(0, 0, post);

    newTodo.value = "";
    this.service.create(post).subscribe(
      response => {
        post.id = response.id;
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          this.errorMessage = error;
        } else {
          this.posts.splice(0, 1);
          throw error;
        }
      }
    );
  }

  onDelete(post: Todo) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert("This post has already been deleted");
      } else {
        throw error;
      }
    });
  }

  updatePost(post: Todo, newTodo: HTMLInputElement) {
    // this.http.patch(this.url, JSON.stringify({ title: newTodo.value })); // to change only few fields of an object
    post.title = newTodo.value;
    newTodo.value = "";
    this.service.update(post).subscribe(response => {
      console.log(response);
    });
  }
}
