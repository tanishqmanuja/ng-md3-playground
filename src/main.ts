import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

/*
 * Schedule app bootstrap to reduce Total Blocking Time (TBT).
 */
setTimeout(() =>
	bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
);
