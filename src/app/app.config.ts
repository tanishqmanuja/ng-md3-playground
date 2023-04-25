import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { ThemeService } from "./shared/data-access/theme.service";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		{
			provide: APP_INITIALIZER,
			useFactory: () => {},
			deps: [ThemeService],
		},
	],
};
