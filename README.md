# React + Sass

This is a react project with SASS baked into it!

### Explore the `package.json` file

Have a look at all the dependencies I have used in our package.json file.

#### @babel/preset-env
This is a Babel preset that determines the JavaScript features to include based on the environment being targeted. It is used to transpile modern JavaScript code into code that can run in older environments, such as older browsers or Node.js versions.

#### @babel/preset-react
This is a Babel preset that is used to transpile React code into JavaScript that can run in a wide range of environments. It includes the necessary transformations and plugins to handle JSX syntax, as well as other features specific to React.

#### html-webpack-plugin
This is a plugin for Webpack that simplifies the creation of HTML files to serve your webpack bundles. It is used to generate the HTML file that will serve as the entry point for your application.

#### css-loader
This is a loader for Webpack that allows it to process CSS files. It is used to process and import CSS files into your JavaScript modules.

#### sass-loader
This is a loader for Webpack that allows it to process Sass files. It is used to process and import Sass files into your JavaScript modules.

#### sass-resources-loader
This is a loader for Webpack that imports Sass resources into each Sass file. It is used to share common Sass variables and mixins between Sass files.

#### style-loader
This is a loader for Webpack that adds CSS to the DOM by injecting a <style> tag. It is used to apply styles to your React components.

#### web-vitals
This is a library for tracking "Web Vitals", a set of metrics defined by Google for measuring the performance and user experience of a website. It provides a simple API for tracking web vitals and reporting the results to analytics tools such as Google Analytics.

#### webpack
This is the core package for Webpack, a popular JavaScript module bundler. It is used to bundle and optimize your JavaScript code for production.

#### webpack-cli
This is the command line interface for Webpack. It provides a set of commands for working with Webpack from the command line.

#### webpack-dev-server
This is a development server that provides live reloading for Webpack projects. It is used to run a development server for your Webpack project and to automatically reload the browser whenever changes are made to the code.

### Mixin challenge

Mixins need to be imported into the React component where they are used. If the mixin is not imported, React will not be able to pick it up.

You will notice I have manually imported all the loaders that make this possible: css-loader, sass-loader, sass-resources-loader, style-loader.

e.g I have defined breakpoints, without above sass-resources-loader, I would have to manually remember to import the breakpoint everwhere I need to call it.

### Webpack config

I also install `webpack` so I can use it to specify  loaders and the order they run.

I then use webpack config to load in all the loaders in the correct sequence, which is in a reverse order.

Sass Resource Loader will firstly get all  breakpoints, and include them into each sass file, then the sass-loader will take all that sass and spit out a css file, finally the style-loader will load that style into the html page.

```
# webpack.config.js file
...
{ loader: 'style-loader' },
{ loader: 'css-loader' },
{ loader: 'sass-loader' },
{
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './src/assets/sass/mixins/_breakpoints.scss'
    ]
  }
}
```

### Run Script

We then tell our package.json run script to use the webpack config we created when started our local server or when we run a new build.

```
{
  ...
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
  },
  ...
}
```
