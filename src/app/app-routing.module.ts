import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodosComponent } from "./components/todos/todos.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { AdminComponent } from "src/app/components/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
