﻿//-----------------------------------------------------------------------------
//  Copyright (c) 2017 Schlumberger  
//  Schlumberger Private  
//-----------------------------------------------------------------------------

/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/app.module';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  'use strict';
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => main());