/************************************************************************************
*                                                                                   *
* Author : Dennis Leenders & Hugo Wiledal                                           *
* Description: Standard gulp project file                                           *
* Version: 1.0                                                                      *
* Plugins used :                                                                    *
*                                                                                   *
* -  gulp-include                                                                   *
* -  gulp-coffee                                                                    *
* -  gulp-compass                                                                   *                                                        
* -  gulp-ugify                                                                     *     
* -  gulp-minify-css                                                                *
*                                                                                   *
************************************************************************************/

var gulp      = require("gulp"),
  include     = require("gulp-include"),
  coffee      = require("gulp-coffee"),
  compass     = require("gulp-compass"),

  uglify      = require("gulp-uglify"),
  mincss      = require("gulp-minify-css");


//////////////////
// DEVELOPMENT //
////////////////

// Scripts
gulp.task("scripts", function() {
  console.log("-- gulp is running task 'scripts'");

  gulp.src("public-source/javascripts/app.coffee")
    .pipe(include())
      .on('error', console.log)
    .pipe(coffee())
      .on('error', console.log)
    .pipe(gulp.dest("public/javascripts"));
});

// Styles
gulp.task("styles", function() {
  console.log("-- gulp is running task 'styles'");
  gulp.src("public-source/stylesheets/main.scss")
    .pipe(compass({
      css: "public/stylesheets",
      sass: "public-source/stylesheets",
      assets: "public-source/images",
      image: "public/images"
    }))
      .on('error', console.log)
    .pipe(gulp.dest("public/stylesheets"));
});

// Watcher
gulp.task("watch", function() {
  console.log("-- GULP IS WATCHING");
  gulp.watch(["public-source/javascripts/**"], ["scripts"]);
  gulp.watch(["public-source/stylesheets/**", "public-source/images/**"], ["styles"]);
});

////////////
// TASKS //
//////////

gulp.task("default", ["scripts", "styles"]);
gulp.task("deploy", ["deploy-scripts", "deploy-styles"]);