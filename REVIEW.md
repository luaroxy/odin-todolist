# Code Review 2nd Part

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

## Testing `todoList.js`

You have spotted a mistake in my last implementation, very well done! **I am sorry I wasn't up to my standards. That mistake shouldn't have happened. I'll make sure it won't happen again.**

To prevent further mistakes, and also because it is an awesome way to demonstrate the value of testing, I have decided to add unit tests to our project.

To test our `TodoList` implementation, I have added and configured the Jest testing framework, which is also used by the [Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-basics).

You should run `npm install` again to make sure all dependencies of Jest are installed. Then run `npm test` to run your tests.

Have a look at the file `todoList.test.js`. It contains the tests for the module of the same name. These should be relatively straight-forward and self-evident.

Hint: For VSCode there is a neat extension that will help you run your tests whenever you change your code. It also adds nice UI support. Have a look and check the extensions page for 'vscode-jest'.