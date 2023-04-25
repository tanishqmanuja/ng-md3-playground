import { Injectable } from "@angular/core";
import {
	themeFromSourceColor,
	argbFromHex,
	applyTheme,
} from "@material/material-color-utilities";
import { isDarkMode } from "../utils/ng/prefers-color-scheme";
import { tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	private theme = themeFromSourceColor(argbFromHex("#f82506"));

	constructor() {
		isDarkMode()
			.pipe(
				tap(dark => {
					applyTheme(this.theme, { dark });
				})
			)
			.subscribe();
	}
}
