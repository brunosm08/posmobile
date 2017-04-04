var gulp   = require('gulp');
var less   = require('gulp-less');
var minify = require('gulp-minify');

var connect = require('gulp-connect');
var clean   = require('gulp-clean');
var util    = require('gulp-util');

gulp.task('src', () => {
    gulp.src('./src/javascript/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('www/assets/js'));

    gulp.src('./src/html/**/*.htm')
        .pipe(gulp.dest('www'));
});

gulp.task('less', () => {
    gulp.src('./src/less/**/*.less')
        .pipe(less({compress: true}))
        .pipe(gulp.dest('./www/assets/css'));
});

gulp.task('third', () => {
    gulp.src('./resources/third/**')
        .pipe(gulp.dest('./www/assets/third'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', [ 'src' ]);
    gulp.watch('./resources/less/**/*.less', [ 'less' ]);
});

gulp.task('server', () => {
    connect.server({
        root: 'www',
        index: 'index.htm',
        liveReload: true,
        port: 8080
    });
});

gulp.task('clean-www', () => {
    gulp.src('./www', {read: false})
        .pipe(clean());
});

gulp.task('clean-nm', () => {
    gulp.src('./node_modules', {read: false})
        .pipe(clean());
});

gulp.task('clean-all', ['clean-www', 'clean-nm']);
gulp.task('default', ['src', 'less', 'third']);
