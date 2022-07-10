Hey Lua,

this is where I'll add some review comments. I have started with a few items, we can iterate as we go along.

I have made some assumptions regarding your work whose conclusions you can ignore should their assumptions turn out to be wrong.

Otherwise, please choose and pick what you consider helpful.

# 1. Let's use some scripts

You probably use webpack via the webpack commands in your CLI. I have added some scripts to your `package.json` to help with these (they're nothing but shortcuts really):

```json
"scripts": {
    "build": "webpack --mode=development --watch --progress",
    "release": "webpack --mode=production",
    "publish": "npm run release && dotnet publish -c Release",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

You can now run these on the CLI via `npm run build` (which will watch for file changes and recompile) or `npm run release`. You can learn more about scripts [here](https://docs.npmjs.com/cli/v8/using-npm/scripts).

For development purposes, you can run `npm run build` from the CLI and then have the `dist/index.html` served to your browser in a way that auto-refreshes the site whenever file changes occur. That way you can edit your project and have changes reflected in your browser immediately. The VS Code extensions *Live Server* does a very good job of this.

# 2. Optimize the `dist` folder

It is good practice to make the `dist` folder entirely reproducible from code. Usually you wouldn't even commit it into your repo because it is rebuilt with every compilation and thus adds noise to your commits. Instead it is good practice to add it to your `.gitignore` file so that any files inside are ignored by git.

I have moved the `index.html` and `plus.png` files into your `src` and `src/images` folders, respectively, and removed the `dist` folder from the index and added it to the `.gitignore` file.

Next, I have added a plugin (`CopyWebpackPlugin`) to your webpack config. This plugin is responsible for copying various files and folders from your `src` to your `dist` folder on compilation.

I have configured it so that the `index.html` file and the `images` folder are copied to your `dist` folder (see more [here](https://www.npmjs.com/package/copy-webpack-plugin)):

```json
plugins: [
    new CopyWebpackPlugin({
    patterns: [
        { from: './src/index.html' },
        { from: './src/images', to: 'images/' }
    ]
    })
]
```

Why was this necessary? Per default, webpack does not copy any files that are not referenced within you entry file (`index.js`) to the `dist` folder. Using the above plugin we have managed to copy the files that we need.