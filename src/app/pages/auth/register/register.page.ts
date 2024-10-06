import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCheckbox,
	IonCol,
	IonContent,
	IonFooter,
	IonGrid,
	IonHeader,
	IonImg,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonTextarea,
	IonTitle,
	IonToolbar,
} from "@ionic/angular/standalone";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-register",
	templateUrl: "./register.page.html",
	styleUrls: ["./register.page.scss"],
	standalone: true,
	imports: [
		IonContent,
		IonHeader,
		IonTitle,
		IonToolbar,
		CommonModule,
		FormsModule,
		IonButton,
		IonButtons,
		RouterModule,
		IonCard,
		IonCardContent,
		IonList,
		IonItem,
		IonInput,
		IonTextarea,
		IonLabel,
		IonCheckbox,
		IonFooter,
		IonBackButton,
		IonRow,
		IonCol,
		IonGrid,
		IonImg,
	],
})
export class RegisterPage implements OnInit {
	constructor() {}
	ngOnInit() {}
}
