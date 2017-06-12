# HTML/CSS/JS starter powered by gulp to use SASS and Babel (ES6)

Includes Gulp to compile Sass into CSS, along with Autoprefixer, Babel into ES5 JS and Browser Sync.

## Setup

Before starting, you'll need [Node](https://nodejs.org/) (which includes NPM).

If using OSX, I'd recommend this guide to [getting set up with Node and NPM](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/).

Then install Gulp using `npm install -g gulp`. This installs Gulp globally and is needed later.

Clone this repo to your local computer using this command:

    git clone https://git@github.com/shramee/gulp-sass-babel.git starter

With the files downloaded, navigate to your `starter` folder on the command line (or Terminal) and run `npm install` to set things up.

If that doesn't work, it may be necessary to use `sudo npm install`.

With this set up, you should now be able to run:

    gulp

This will process any Sass (SCSS) files, translate ES6 to ES5 and launch a web browser showing the current files. Making changes to the files should result in the page updating automatically.

## Questions

Drop me a line at [shramee.srivastav@gmail.com](shramee.srivastav@gmail.com) with any questions or thoughts. Pull requests welcomed!

### License

MIT
