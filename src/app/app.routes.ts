import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard/dashboard.component";
import {LoginComponent} from "./pages/login/login/login.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];
