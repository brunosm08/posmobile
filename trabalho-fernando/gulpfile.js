var gulp = require('gulp');
var less = require('gulp-less');

var less = require('gulp-less');

var connect = require('gulp-connect');




///npm install --save-dev gulp
//npm install --save-dev gulp-less

//npm install --save-dev gulp-connect

/*gulp.task('default', function() {







});*/


//para rodar o server tem quer dar em uma aba gulp watch e em outra aba gulp server
//# gulp server
gulp.task('server', function() {
  connect.server({
    root: 'www',
    livereload: true,
    index:'index.html',
    port:8080
  });
});


gulp.task('default', ['assets','compile-src'])


gulp.task('assets', function() {

    gulp.src('assets/less/estilo.less')
    .pipe(less({compress:true}))
      .pipe(gulp.dest('www/css'));



});

gulp.task('assets-html', function() {

  gulp.src('assets/html/index.html')
    .pipe(gulp.dest('www/'));


});

gulp.task('compile-src', function() {

  gulp.src('src/app.js')
    .pipe(gulp.dest('www/js/'));


});


//PARA RODAR com atualização romantica #gulp watch
gulp.task('watch', function() {
// ** = qualquer arquivo em qualquer subdiretorio
    gulp.watch('assets/html/**/*.html',['assets-html']);
    gulp.watch('assets/less/**/*.less',['assets']);
    gulp.watch('src/**/*.js',['compile-src']);




});
