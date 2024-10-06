import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "login",
		loadComponent: () =>
			import("./pages/auth/login/login.page").then((m) => m.LoginPage),
	},
	{
		path: "register",
		loadComponent: () =>
			import("./pages/auth/register/register.page").then((m) => m.RegisterPage),
	},
];
