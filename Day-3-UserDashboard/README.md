# User Dashboard

A simple responsive User Dashboard built with HTML, CSS, and JavaScript.

The project fetches users from the JSONPlaceholder API and stores the response in a JavaScript array. Users can then be displayed, added, updated, and deleted directly from the UI.

## Features

* Fetch users using the Fetch API
* Display users dynamically using JavaScript
* Add new users to the local `users` array
* Update an existing user's name
* Delete users from the local array
* Automatically generate an ID for new users
* Responsive user interface
* Use of JavaScript array methods such as `forEach`, `filter`, `find`, `findIndex`, and `map`
* DOM manipulation and event handling
* Promise handling with `async/await`

## API

The initial user data is fetched from:

`https://jsonplaceholder.typicode.com/users`

The API is used only for the initial GET request.

Add, Update, and Delete operations are performed only on the JavaScript `users` array.

No POST, PUT, or DELETE API requests are made.

## Project Structure

```text
day-3-user-dashboard/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## How It Works

### 1. Fetch Users

When `index.html` loads, `getData()` fetches the users from JSONPlaceholder and stores them in the `users` array.

### 2. Display Users

The `display()` function receives the users array and dynamically creates the user rows.

Each user has:

* User name
* Update button
* Delete button

### 3. Update User

Clicking the Update button changes the user's name into an editable input field.

After clicking Save, the corresponding object in the `users` array is updated and `display()` is called again.

### 4. Delete User

Clicking Delete removes the user using the `filter()` method and calls `display()` again.

### 5. Add User

Clicking Add User creates a new input field.

After entering a name, a new user object is created and pushed into the `users` array.

The list is then displayed again.

## Important Note

This project intentionally does not use:

* Local Storage
* Session Storage
* Cookies
* POST requests
* PUT requests
* DELETE requests

Therefore, changes are stored only in the current JavaScript runtime.

If the page is refreshed, the original 10 users are fetched again from JSONPlaceholder and locally added, updated, or deleted changes are lost.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Fetch API
* JSONPlaceholder REST API
* DOM Manipulation
* JavaScript Array Methods
* Async/Await
* Promises

## Learning Objectives

This project was created as part of a JavaScript practice task covering:

* Callbacks and Higher Order Functions
* Promises
* Promise chaining
* API calls
* Array methods
* String methods
* Object methods
* DOM manipulation
* Event handling

## Author

Navitha
