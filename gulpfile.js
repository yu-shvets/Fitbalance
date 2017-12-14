var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify"),
		include        = require('gulp-include');
		
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
});
gulp.task('fonts', function () {
  return gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('scripts', function() {
	return gulp.src([ 'app/js/*.js' ])
	.pipe(include()).on('error', console.log)
	// .pipe(uglify())
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('scss', function() {
	return gulp.src(['app/scss/*.scss'])
	.pipe(sass({
		includePaths: require('node-reset-scss').includePath
	}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleanCSS())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
	return gulp.src(['app/*.html', 'app/*.html'])
	.pipe(include()).on('error', console.log)
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*.*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('watch', ['scss', 'scripts','html', 'browser-sync'], function() {
	gulp.watch(['app/scss/**/*.scss','app/scss/*.scss'], function(event, cb) {
        setTimeout(function(){gulp.start('scss');},500);
    }
    );
	gulp.watch(['app/js/*.js', 'app/js/**/*.js'], ['scripts']);
	gulp.watch(['app/*.html', 'app/**/*.html'], ['html']);
	gulp.watch(['app/img/**/*.*'], ['imagemin']);
	gulp.watch(['app/fonts/*.*'], ['fonts']);
});


gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
