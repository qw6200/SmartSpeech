var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var cleanCSS = require('gulp-clean-css');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', './public/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

// Minify the CSS
gulp.task('minify-css', function() {
    return gulp.src('styles/bootstrap.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("public/scripts"))
        .pipe(browserSync.stream());
});

gulp.task('nodemon', function(cb) {
    var started = false;
    nodemon({
        script: 'app.js',
        ext: 'js',
        exec: 'node'
    })
    .on('start', () => {
        if (!started) {
            cb();
            started = true;
        }
    })
    .on('restart', function () {
        console.log('Restart application on file change.');
    })
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'minify-css', 'nodemon'], function () {

    browserSync.init({
        server: './public/',
        // proxy: "http://localhost:3000",
        port: 7000
    }); 

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', './public/scss/*.scss'], ['sass']);
    gulp.watch("views/*.jade").on('change', browserSync.reload);
   
});

gulp.task('default', ['js', 'serve']);