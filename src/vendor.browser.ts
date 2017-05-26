/* tslint:disable:no-string-literal no-require-imports no-var-requires */

// for vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// jQuery
import 'jquery';

// angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// angular Pipes
import 'angular-pipes/src/string/split.pipe';

// ng2-validation
import 'ng2-validation';

// rxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/publishReplay';

// humps
require('humps');


if ('production' === ENV) {
  // production


} else {
  // development

}
