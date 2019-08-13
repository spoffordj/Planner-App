// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyCdP2FPC6b7dm5DW7uA1lmEszhsCthOCB0",
    authDomain: "planner-app-ng.firebaseapp.com",
    databaseURL: "https://planner-app-ng.firebaseio.com",
    projectId: "planner-app-ng",
    storageBucket: "planner-app-ng.appspot.com",
    messagingSenderId: "97474824527"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
