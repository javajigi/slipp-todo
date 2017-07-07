// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDyqv7O4iNqMACPOK19eDlRvq1b5ZhQ5eA",
    authDomain: "slipp-study.firebaseapp.com",
    databaseURL: "https://slipp-study.firebaseio.com",
    projectId: "slipp-study",
    storageBucket: "slipp-study.appspot.com",
    messagingSenderId: "84879427628"
  }
};
