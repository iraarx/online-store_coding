/** ===========================================================================
 *
 * Gulp configuration file.
 *
 * ========================================================================= */





'use strict';





/** ---------------------------------------------------------------------------
 * Load plugins.
 * ------------------------------------------------------------------------- */

var gulp = require('gulp'),
    browser = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    minifyJS = require('gulp-uglify'),
    concatJS = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    svgSprites = require('gulp-svg-sprites'),
    sequence = require('run-sequence'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    pug = require('gulp-pug')
    // preservetime = require('gulp-preservetime');
    
    



/** ---------------------------------------------------------------------------
 * Regular tasks.
 * ------------------------------------------------------------------------- */

// Create a server with BrowserSync and watch for file changes.
gulp.task('server', function() {
    browser.init({
        // Inject CSS changes without the page being reloaded.
        injectChanges: true,

        // What to serve.
        server: {
            baseDir: "dist"
        },

        // The port.
        port: 1234

        // For a complete list of options, visit: https://www.browsersync.io/docs/options
    });

    // Watch for file changes.
    // gulp.watch('src/*.html', ['watch-html']);
    gulp.watch(['src/pug/pages/*.pug', 'src/pug/pages/elements/*.pug', 'src/pug/layout/*.pug'], ['watch-pug']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['watch-js']);
    gulp.watch(['src/img/**/*.{png,jpg,gif,svg,ico}', '!src/img/sprites/**'], ['watch-img']);
    gulp.watch('src/img/sprites/sprites_svg/**', ['sprites-svg']);
});


// Compiles Pug to HTML
gulp.task('pug', function() {
    return gulp.src('src/pug/pages/*.pug')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'Gulp error in the <%= error.plugin %> plugin',
            message: '<%= error.message %>'
        })
    }))
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('dist'));
  });

// Compiles Sass to CSS.
gulp.task('sass', function() {
    return gulp
        .src('src/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Gulp error in the <%= error.plugin %> plugin',
                message: '<%= error.message %>'
            })
        }))
        .pipe(sass({
            // Sass related options go here.
            // more options here: https://github.com/sass/node-sass#options
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 6-8']
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browser.stream());
});


// Concatenate and minify JS.
gulp.task('js', ['lint-js'], function() {
    return gulp
        .src([
             // smoothscroll
            // 'node_modules/smoothscroll-for-websites/SmoothScroll.js',
            // jquery
            'node_modules/jquery/dist/jquery.min.js',
            // jquery-matchmedia
            'node_modules/jquery-matchmedia\dist\jquery.matchMedia.polyfill.min.js',
            // jquery easing
            'node_modules/jquery.easing/jquery.easing.min.js',
            // owl carousel
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            // snap.svg
            'node_modules/snapsvg/dist/snap.svg-min.js',
            // fontawesome
            'node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
            // main scripts
            'src/js/**/*.js'
       
        ])
        .pipe(concatJS('scripts.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(minifyJS())
        // .pipe(minifyJS({}))
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Check JS code for errors.
gulp.task('lint-js', function() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail')); // task fails on JSHint error
});

// Font awesome
gulp.task('fonts', function() {
    return gulp
        .src('node_modules/@fortawesome/fontawesome-free/webfonts/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('dist/webfonts/'));
});

// Compresses images.
gulp.task('img',  function() {
    return gulp
        .src(['src/img/**/*.{png,jpg,gif,svg,ico}', '!src/img/sprites/**'])
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('dist/img'));
});

// Creates sprites from SVG files.
gulp.task('sprites-svg', function() {
    return gulp
        .src('src/img/sprites/sprites_svg/**/*.svg')
        .pipe(svgSprites({
            cssFile: 'scss/sprites/_sprites.scss',
            templates: {
                scss: true
            },
            preview: false,
            svg: {
                sprite: 'img/sprites.svg'
            }
        }))
        .pipe(gulp.dest('src'));
});



// Deletes the dist folder so the build can start fresh.
gulp.task('reset', function() {
    return gulp
        .src('dist')
        .pipe(clean());
});




/** ---------------------------------------------------------------------------
 * Watch tasks.
 * ------------------------------------------------------------------------- */

gulp.task('watch-pug', ['pug'], function(done) {
    browser.reload();
    done();
});

// Images.
gulp.task('watch-img', ['img'], function(done){
    browser.reload();
    done();
});

// JS.
gulp.task('watch-js', ['js'], function(done) {
    browser.reload();
    done();
});





/** ---------------------------------------------------------------------------
 * The main task.
 * ------------------------------------------------------------------------- */
gulp.task('default', function(cb) {
    sequence('reset', 'pug', 'sprites-svg', ['sass', 'img', 'js'], 'fonts', 'server', cb);
});
