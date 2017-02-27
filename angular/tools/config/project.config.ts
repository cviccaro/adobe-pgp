import { join } from 'path';

import { SeedConfig } from './seed.config';

import * as DevConfig from '../env/dev';
import * as ProdConfig from '../env/prod';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  CONF: any;
  INJECTABLES: string[];

  addToPackages: (name: string, config: any) => void;
  addToPaths: (name: string, config: any) => void;

  constructor() {
    super();

    this.addToPackages = (name: string, config: any) => {
      this.SYSTEM_CONFIG_DEV.packages[name] = config;
      this.SYSTEM_BUILDER_CONFIG.packages[name] = config;
    };
    this.addToPaths = (name: string, config: any) => {
      this.SYSTEM_CONFIG_DEV.paths[name] = config;
      this.SYSTEM_BUILDER_CONFIG.paths[name] = config;
    };

    this.APP_TITLE = 'Adobe PGP Generator';

    this.ENABLE_SCSS = true;

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'angular2-toaster/lib/toaster.css', inject: true }
      // { src: 'hammerjs/hammer.min.js', inject: 'libs'}
      // { src: '@angular/material/core/overlay/overlay.css', inject: true, vendor: false }
     // { src: 'hammerjs/hammer.min.js', inject: 'libs' }
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    this.SYSTEM_BUILDER_CONFIG.packageConfigPaths.push(
      join(this.PROJECT_ROOT, 'node_modules', '@angular', 'material', '*', 'package.json')
    );

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      { src: `${this.CSS_SRC}/theme.css`, inject: true },
      { src: `${this.CSS_SRC}/app.css`, inject: true }
    ];

    /* Add to or override NPM module configurations: */
    this.mergeObject(this.PLUGIN_CONFIGS['gulp-sass'], {
      includePaths: [
        './node_modules/',
        './../resources/assets/scss/'
      ]
    });

    this.addToPackages('hammerjs', {
      main: 'hammer.min.js',
      defaultExtension: 'js'
    });

    this.addToPackages('moment', {
      main: 'min/moment-with-locales.min.js',
      defaultExtension: 'js'
    });

    this.addToPackages('angular2-moment', {
      main: 'index.js',
      defaultExtension: 'js'
    });

    this.addToPackages('angular2-toaster', {
      defaultExtension: 'js',
      main: 'angular2-toaster.js',
    });

    this.addToPackages('@angular/material', {
      format: 'cjs',
      main: 'bundles/material.umd.js',
    });

    let PACKAGES: string[] = [];

    for (let pkgName in this.SYSTEM_BUILDER_CONFIG.packages) {
      PACKAGES.push(join(pkgName,'**'));
    }

    this.INJECTABLES = this.NPM_DEPENDENCIES.map(dep => dep.src).concat(PACKAGES);

    switch(this.BUILD_TYPE) {
      case 'dev':
        this.CONF = DevConfig;
        break;
      case 'prod':
        this.CONF = ProdConfig;
        break;
    }
  }
}
