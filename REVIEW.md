# Code Review 2nd Part

## Remove /dist folder from git index

Your /dist folder is still indexed in git (i.e. changes inside are tracked by git). To remove it, run this command inside your root folder:

```git rm --cached -r dist ```

All files inside /dist have now been marked for removal from the index. Commit and push the changes. Then remove the `dist` folder manually from your filesystem. Next, add this line to your `.gitignore` file to tell git to ignore files and changes in that folder in the future:

```dist/```

Again, commit the changes and push. Now we won't have to deal with the /dist folder any more and changes therein won't pollute our git history.

## Move all images into the /image folder

You are saving images to a separate `imagesHTML` folder. That works but makes me wonder: Why two folders? What's special about `imagesHTML` as compared to `images`? Let's fix that and save images to just one location `images`. Move the files from `imagesHTML` into `images`, the remove the former folder. Adjust your references inside `index.html` accordingly. Then adjust your `webpack.config.js` file:

```
{ from: './src/images', to: 'images/' }
```

## Refactoring `index.js`

Have a look at the `index.js` file. I have refactored it a bit. These are all suggestions only.

## Refactoring `todoPreview.js`

Let's have a look at your `todoPreview.js` file. There's one part that immediately catches my eyes:

```
let todoList = [];
```

Okay, it's an array that probably holds your todo list items. Then we have these operations on that array: Adding an item to the 'list':

```
todoList.push(newTodoItem);
```

and deleting an item from the 'list':

```
todoList.forEach((item,index)=>{
    if(item.id === taskID) todoList.splice(index,1);
})
```

Now, you are learning about OOP. As you know, objects have state and behavior, that is they define properties/variables and functions, respectively. Our `todoList` is a perfect example of this: it saves items (state) and lets you operate on these (add/remove them).

I think it would be quite handy to turn that list into a more specific type instead of an array. To do so, I have defined a class `TodoList` (by convention class names in JS are in PascalCase) in the `todoList.js` file.

Have a look at the class and see where I changed the corresponding client code inside the `todoPreview.js` file.