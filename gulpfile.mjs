import { dest, parallel, series, src, watch } from "gulp";
import gulpSass from "gulp-sass";
import zip from "gulp-zip";
import os, { type } from "os";
import { join } from "path";
import * as dartSass from "sass";

const sass = gulpSass(dartSass);

export const buildStyles = () => {
  console.log("Compiling CSS files...");

  return src(["src/*.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest("dist/adwaita"));
};

export const includeAssets = () => {
  console.log("Including assets...");
  return src(["adwaita/*.png"]).pipe(dest("dist/adwaita/adwaita"));
};

export const makeZip = () => {
  console.log(`Building releases...`);
  return src("dist/adwaita/**")
    .pipe(zip("Adwaita.zip"))
    .pipe(dest("./release"));
};

export const dev = () => {
  let themeLocation;
  switch (type()) {
    case "Windows_NT":
      themeLocation = `${process.env.APPDATA}\\Typora\\themes`;
      break;
    case "Darwin":
      themeLocation = `${process.env.HOME}/Library/Application Support/abnerworks.Typora/themes`;
      break;
    case "Linux":
      themeLocation = `${os.homedir()}/.config/Typora/themes`;
      break;
  }

  // Watch styles
  watch(["src/*.scss"], { ignoreInitial: false }, function styleWatcher() {
    return themeLocation
      ? buildStyles().pipe(dest(themeLocation))
      : buildStyles();
  });

  // Watch assets
  watch(
    ["adwaita/*.(ttf|woff|png)"],
    { ignoreInitial: false },
    function assetWatcher() {
      return themeLocation
        ? includeAssets().pipe(dest(join(themeLocation, "adwaita")))
        : includeAssets();
    }
  );
};

export default parallel(buildStyles, includeAssets);
export const release = series(buildStyles, includeAssets, makeZip);
