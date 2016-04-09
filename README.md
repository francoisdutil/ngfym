# ngFYM

## Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

The root directory generated for a app with name `gulpAngular` :
<pre>
├──  src/
│   ├──  app/
│   │   ├──  components/
│   │   │   └──  navbar/
│   │   │   │   ├──  navbar.controller.js
│   │   │   │   └──  navbar.html
│   │   │   └──  footer/
│   │   │   │   ├──  footer.controller.js
│   │   │   │   └──  footer.html
│   │   │   └──  slides/
│   │   │   │   ├──  slides.controller.js
│   │   │   │   └──  slides.html
│   │   │   └──  schedule/
│   │   │   │   ├──  schedule.controller.js
│   │   │   │   └──  schedule.html
│   │   ├──  main/
│   │   │   ├──  main.controller.js
│   │   │   ├──  main.controller.spec.js
│   │   │   └──  LanguageSelectDirective.js
│   │   │   └──  LocaleService.js
│   │   │   └──  modal.new.service.html
│   │   └──  index.js
│   │   └──  index.(css|less|scss)
│   │   └──  vendor.(css|less|scss)
│   ├──  I18n/
│   │   └──  en.json
│   │   └──  fr.json
│   ├──  assets/
│   │   └──  images/
│   │   └──  pdf/
│   │   └──  pdf/schedule.pdf
│   ├──  404.html
│   ├──  favico.ico
│   └──  index.html
├──  gulp/
├──  e2e/
├──  bower_components/
├──  nodes_modules/
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .jshintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
├──  protractor.conf.js
</pre>


## Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application
* **TODO** lazy : don't process files which haven't changed when possible

# Gulp Tasks

Because the `gulpfile.js` was becoming enormous and because I hate huge files, this
directory contains all the gulp tasks splited by purposes. `gulpfiles.js` passes path
configuration to gulp tasks through `gulp.paths`.

## build.js

Contains the build tasks aiming to optimize all your project and create the dist folder
- **partials**: compile html partials in one javascript `templateCacheHtml.js`
- **html**: the big one with `useref`, `rev` and `uglify`.
- **images**: optimize images with imagemin.
- **fonts**: copy fonts from bower to dist
- **misc**: copy other files
- **clean**: delete temporary files
- **build**: html + images + fonts + misc

## e2e-tests.js

Task for launching e2e tests from Gulp. Which means launching local server,
an instance of Selenium and Protractor.

## inject.js

Inject task which link project files in the `index.html` and write the result in `.tmp/serve/index.html`
- Project CSS files
- Project JS files
- Bower css and js deps

**Warning** The `src/index.html` is not modified (it was the case in previous version and is still the case in other generators) but the injected `index.html` is placed in `.tmp/serve`.

## markups.js

Compile your markups files (when you use a HTML preprocessor).

## proxy.js

Optional implementation of a proxy which ables to address your backend server through BrowserSync (and avoir CORS).

## scripts.js

Compile your scripts with your JS preprocessor if you have one. Run the linter. If you use ES6, will also use Browserify to bundle the files.

## server.js

Gulp tasks which start a server for development or e2e tests.

## styles.js

Compile your styles with your CSS preprocessor. Use injection in the index.*

## tsd.js

Typescript specific tasks to generate Typescript descriptors.

## unit-tests.js

Task for launching the unit tests with Karma from Gulp.

## watch.js

Watch task which watch over source files to trigger recompilation.
