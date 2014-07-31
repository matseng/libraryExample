// This creates an array of all the files that Karma finds with a suffix of
// Spec.js (eg utilsSpec.js) to be added to the Require JS config below
var tests = [],
    file;
for (file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if(/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
requirejs.config({
    // baseUrl: '/base/myLibrary',  // Karma serves files from /base/<your-base-path>
    baseUrl: '/base',  // Karma serves files from /base/<your-base-path>
    paths: {
        //.. the paths you have set in your Require Js main.js file
        // eg jquery: "libs/jquery.min"
    },
    deps: tests,  // add tests array to load our tests

    callback: window.__karma__.start  // start tests once Require.js is done
});
