// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

export const environment = {
  production: false,
  firebase : {
  apiKey: "AIzaSyBHRs84uu59jB8D4o_LTr3WPLib7e1z2wA",
  authDomain: "imageuploadforswitter.firebaseapp.com",
  projectId: "imageuploadforswitter",
  storageBucket: "imageuploadforswitter.appspot.com",
  messagingSenderId: "982180335715",
  appId: "1:982180335715:web:64a3a659105e2622ad2856"
}
};
const app = initializeApp(environment.firebase);
export const storage = getStorage(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
