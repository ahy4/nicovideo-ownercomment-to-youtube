const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

gulp.task('default', () => {
  gulp.src(['src/*', '!src/.gitkeep'])
    .pipe(replace(/^(\d*[.]\d*):([^:]*):(.*)/gm, (match, second, command, message) => {
      const start = computeDuration(Number(second)*1000);
      const end = computeDuration((Number(second)+3)*1000);
      return (
        `${start},${end}` + "\n" +
        `>> ${message}` + "\n"
      );
    }))
    .pipe(rename({
      extname: ".sbv"
    }))
    .pipe(gulp.dest('./dist'));
});


/**
 * ミリ秒を時分秒へ変換
 */
function computeDuration(ms) {
  var h = String(Math.floor(ms / 3600000) + 100).substring(1);
  var m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
  var s = String(Math.floor((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
  var ms = String(ms % 1000);
  return h+':'+m+':'+s+'.'+ms;
}
