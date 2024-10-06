import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCheckbox,
	IonContent,
	IonHeader,
	IonImg,
	IonInput,
	IonTitle,
	IonToolbar,
} from "@ionic/angular/standalone";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
	standalone: true,
	imports: [
		IonContent,
		IonHeader,
		IonTitle,
		IonToolbar,
		CommonModule,
		FormsModule,
		RouterModule,
		IonButton,
		IonButtons,
		IonCard,
		IonImg,
		IonCardContent,
		IonInput,
		IonCheckbox,
	],
})
export class LoginPage {
	constructor() {}
}
