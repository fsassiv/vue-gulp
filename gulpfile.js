var gulp = require("gulp");
var watch = require("gulp-watch");
var sass = require("gulp-sass");
var srcmaps = require("gulp-sourcemaps");
var wait = require("gulp-wait");
var cleanCSS = require("gulp-clean-css");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var bs = require("browser-sync").create();

// PATHS
var dist_path = "./dist/";
var sass_path = "./src/assets/style/**/*.scss";
var css_path = "./dist/style.css";

// TASKS
gulp.task("default", function() {
  console.log('Gulp says "Hi".');
  return null;
});

gulp.task("sass", function() {
  return gulp
    .src(sass_path)
    .pipe(
      plumber(function(err) {
        console.log("SASS task error:");
        console.log(err);
      })
    )
    .pipe(wait(500))
    .pipe(srcmaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
        // outputStyle: "expanded"
      })
    )
    .pipe(srcmaps.write("/"))
    .pipe(plumber.stop())
    .pipe(gulp.dest(dist_path));
});

gulp.task("watch", function() {
  gulp.watch(sass_path, ["sass"]);
});
