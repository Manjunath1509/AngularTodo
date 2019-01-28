import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodosItemComponent } from "./components/todos-item/todos-item.component";
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent,
    AboutComponent,
    HeaderComponent,
    AddTodoComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
