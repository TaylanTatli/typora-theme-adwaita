
# Typora Adwaita Theme

A [Typora](https://typora.io) theme, trying to mimic Gnome's Adwaita theme.

![Adwaita Typora Theme](https://raw.githubusercontent.com/TaylanTatli/typora-theme-adwaita/master/images/preview.png)

Code fence themes are taken from [here](https://support.typora.io/Code-Block-Styles/), it's CodeMirror Material theme with modified background color.

> Note: This theme has been designed and tested for Linux only. I don't know how it looks with unibody.

## Installation 

Decompress the latest release from [here](https://github.com/TaylanTatli/typora-theme-adwaita/releases). In Typora's preferences windows, go to `General -> Themes` and click on `Open Theme Folder`. Drop all the decompressed files and folders in there, and enjoy!

## Build

This theme uses [Sass](https://sass-lang.com/) and [Gulp.js](https://gulpjs.com/), so the repo doesn't hold the direct CSS files for the sake of keeping the repo's filetree clean.

If you wish to manually build the theme (and maybe add your own touches in the process), you'll need `pnpm` & run the following commands:

```bash
pnpm i
gulp
```

The compiled CSS files will be located in the `/dist` directory once complete.

Three is also a `dev` script that will watch the files and assets & update your themes in your themes folder directly as you save your changes. Simply run `gulp dev` to do so (and remember to reselect the theme in Typora afterwards to see the changes).

## Thanks

- [**Ursine Typora Theme**](https://github.com/noatpad/typora-theme-ursine): I started building this theme based on Ursine Typora Theme.