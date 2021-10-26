// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  configApp: {
    usuario: "Admin",
    password: "2019.-",
    urlservidor: "http://localhost:80/back_testcss/public/api/",
    //urlMarker: "https://fiiss.com/pacman/web/assets/",
    // urlservidor: 'http://domidomiapp.com/backend_domidomi_cienaga/public/api/',
    urlMarker: "../../../../assets/",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
