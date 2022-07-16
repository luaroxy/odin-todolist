# Code Review 3rd Part

This is a huge review. I hope it is not too much. I am introducing the important concept of MVC to refactor your codebase. I have given it some time to see if this is the right step at this time, and from what I can infer you are ready for this.

However, if you feel lost, don't worry. This is not an easy concept and we will need some time to hit it home. 

We can always take a step back and go through the following review part by part. Please let me know.


## Refactoring Project and Separating Concerns

We have a bit of refactoring to do. Why? Your code is working perfectly. That's the first step: Make it work. But when you look at it, there's something that should strike you as rather cumbersome: We have different concerns spread all over our files.

All our files deal with the following concerns **at the same**:
+ time UI/markup concerns (for example, by creating and appending elements)
+ model concerns: by creating new todo items and assigning their properties

Having all those concerns spread over all files makes maintaining our codebase rather difficult. Contexts are so broad that it is tough figuring out what we are dealing with exactly in which file.

Consequently, we have to take the second step of our process: Make it readable/maintainable.

Luckily, there is a way we can achieve maintainability. We have to separate concerns and assign these to dedicated classes and files. This is known as the "Principle of Separation of Concerns" (SOC).

In web development there is a common pattern to address SOC: MVC. This stands for Model - View - Controller and it a separation that works well in apps that offer a rich UI. In MVC we have the following parts and their concerns (cf. https://www.taniarascia.com/javascript-mvc-todo-app/):

+ Model: Is part of the model layer and deals only with our independent model (core business logic)
    + the model knows about ToDo Items and the ToDo List
    + it does *not* know about any UI or UI-related things, that's why it is "independent"
+ View: This is the UI part of our app and deals view everything dealing with the interface and visual representation of our app
    + the view knows about models, as it needs to render these in the UI
+ Controller: This is the mediator between Model and View
    + it is the part that knows both about our Model and our View
    + it delegates user interaction (user events) on the view to the model
    + and then makes sure that whenever the model changes (e.g. new to do items are created), the view is updated

I have refactored your entire app. It was a lot of work and I hope you can bear with me:

+ the entire app logic is now inside the `app` folder
+ the models are inside the `app/models` subfolder:
    + `appModel.js`: deals with general app model concerns: creating new ToDo items, appending them to our list, removing them from our list;
    + `todoItem.js`: represents the data structure of one ToDo item;
    + `todoList.js`: represents the list of ToDo items and its operations;
+ the views are inside the `app/views` subfolder:
    + `appView.js`: handles general app UI state, e.g. appending new ToDo items to the DOM, removing them, handling UI events and communicating them to the controllers
    + `todoItemView.js`: handles todo items in the UI layer, e.g. rendering ToDo items and updating these in the DOM
+ there is one controller inside the `app/controllers` subfolder:
    + `appController.js`: mediates between the app model and view

The AppControler is the root component of your app, which is why it is instantiated inside the main JS file `app/app.js`. The entire app flow logic starts there and reacts to user and UI events.

## Template

Inside the `index.html` I have added a `<template>` tag, which contains the template for new ToDo items inside the DOM. This procedure replaces the DOM manipulation logic that you used before (creating elements and appending them upon creating a new ToDo item). This has the benefit of keeping the markup inside the HTML file and thus visible and easy to handle for CSS rendering and handloing.

The template is read and its content is cloned inside the `appendTodoItem()` function in the App View (`app/views/appView.js` file). For more details on HTML templates, please have a look here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template.