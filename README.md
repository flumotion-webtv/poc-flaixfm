poc-flaixfm
===========

### Development
#### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is poc-flaixfm repo
* Install components: `bower install` while current directory is poc-flaixfm repo

#### Build
* Build the whole project: `grunt` - this will run `jshint`, `test`, and `build` targets

Check the Grunt build file for other tasks that are defined for this project.

#### TDD
* Run test: `grunt serve`

This will start Karma server and will continuously watch files in the project, executing tests upon every change.

### Release
* Create dist: `grunt`
* Push the build: `grunt buildcontrol:github`