import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { ThemeService } from "./shared/data-access/theme.service";

function initializeApp(themeService: ThemeService) {
	return () => Promise.resolve(themeService);
}

export const appConfig: ApplicationConfig = {
	providers: [
		ThemeService,
		provideRouter(routes),
		{
			provide: APP_INITIALIZER,
			useFactory: initializeApp,
			deps: [ThemeService],
			multi: true,
		},
	],
};
