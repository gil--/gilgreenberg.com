'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

// ===== Postcss
var postcss       = require('gulp-postcss');
var assets        = require('postcss-assets');
// ===== CSS/Sass
var autoprefixer  = require('autoprefixer');
var csswring      = require('csswring');
var sass          = require('gulp-sass');
var scsslint      = require('gulp-scss-lint');
var sourcemaps    = require('gulp-sourcemaps');
// ===== SVG Stuff
var svgstore      = require('gulp-svgstore');
var svgmin        = require('gulp-svgmin');
var postcssSVG    = require('postcss-svg');
// ===== Other Stuff
var cache         = require('gulp-cached');
var watch         = require('gulp-watch');
var browsersync   = require('browser-sync').create();

/*
    Setup SVG Workflow
*/
gulp.task('svg', function() {
    return gulp.src('./images/svg/src/**/*.svg')
    .pipe(svgstore({
        fileName: 'symbols.svg',
        transformSvg: function (svg, cb) {
            svg.find('[fill]').removeAttr('fill');
            cb(null);
        }
    }))
    .pipe(gulp.dest('./dist/svg'));
});


/*
 *    Compile Sass to CSS
 */
gulp.task('sass', function() {
    var processors = [
        autoprefixer('last 2 version', 'ie 9'),
        assets({
          loadPaths: ['/images']
        }),
        csswring,
        postcssSVG({
          paths: ['/svg/src/'],
        }),
    ];
    return gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browsersync.stream({ match: '/**/*.scss' }));
});


/*
 *    Setup Browser Sync
 */
gulp.task('bs', function() {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function() {
    browsersync.reload();
});


/*
 *    Setup Gulp watch task
 *
 *    DESC: Watches for changes inside SCSS and JS files and reloads browser after recompiling
 */
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass', 'bs-reload']);
    //gulp.watch('./js/**/*.js', ['javascript', 'bs-reload']);
});


/*
 *    Default gulp task, runs on `gulp`
 */
gulp.task('default', ['svg', 'sass', 'javascript', 'watch', 'bs']);


gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './js/entry.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});
