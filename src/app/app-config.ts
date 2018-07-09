import { InjectionToken } from "@angular/core";

const configs = {
  ApiUrl: 'https://jsonplaceholder.typicode.com'
}

export const AppConfig = new InjectionToken('', { providedIn: 'root', factory: () => configs })