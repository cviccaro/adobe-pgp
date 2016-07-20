import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import { join } from 'path';
import { INJECTABLES, ENV, APP_DEST } from '../../config';

const plugins = <any>gulpLoadPlugins();

/**
 * For use when serving over PHP on a server
 * using standard laravel nginx/apache config
 *
 * Moves requisite node modules into the public directory
 *
 * @returns {NodeJS.ReadWriteStream}
 */
function copyNodeModules() {
  return gulp.src(INJECTABLES, { cwd: 'node_modules/**' })
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
  : merge(copyNodeModules(), copyBuiltFiles());

export = () => stream;
