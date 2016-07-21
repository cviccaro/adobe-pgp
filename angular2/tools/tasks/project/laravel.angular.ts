import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as path from 'path';
import { INJECTABLES, ENV, APP_DEST, TMP_DIR } from '../../config';
import * as fs from 'fs';
const join = path.join;

const plugins = <any>gulpLoadPlugins();

/**
 * For use when serving over PHP on a server
 * using standard laravel nginx/apache config
 *
 * Moves requisite node modules into the public directory
 *
 * @returns {NodeJS.ReadWriteStream}
 */
function copyNodeModulesTemp() {
  let i = INJECTABLES.filter(glob => {
    if (glob.indexOf('*') === -1) {
      return !fs.existsSync(join(TMP_DIR, 'node_modules', glob));
    } else {
      return !fs.existsSync(join(TMP_DIR, 'node_modules', path.dirname(glob)));
    }
  });

  return gulp.src(i, { cwd: 'node_modules/**' })
    .pipe(gulp.dest(join(TMP_DIR, 'node_modules')));
}
function copyNodeModules() {
  return gulp.src(join(TMP_DIR, 'node_modules', '**', '*'))
    .pipe(gulp.dest('../public/node_modules'));
}

/**
 * Copy built files and rename and move
 * index.html to views folder
 *
 * @returns {NodeJS.ReadWriteStream}
 */
function copyBuiltFiles() {
  const f = plugins.filter(`${APP_DEST}/index.html`, {restore: true});

  return gulp.src(join(APP_DEST, '**', '*'))
    .pipe(f)
    .pipe(plugins.rename('angular.blade.php'))
    .pipe(gulp.dest('../resources/views'))
    .pipe(f.restore)
    .pipe(gulp.dest('../public'));
}

let stream = ENV === 'prod' ?
  copyBuiltFiles()
  : merge(copyNodeModulesTemp(), copyNodeModules(), copyBuiltFiles());

export = () => stream;
