var gulp = require("gulp"),
	gutil = require("gulp-util"),
	postcss = require("gulp-postcss"),
	sourcemaps = require("gulp-sourcemaps"),
	autoprefixer = require("autoprefixer"),
	connect = require("gulp-connect");


gulp.task('autoprefixer', function () {
    return gulp.src('./development/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./production/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'development',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./development/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./development/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch', 'autoprefixer']);