# React Lorem Generator

This code is a React component that generates a form with an input field and a button. When the button is clicked, the code uses the value from the input field to determine how many paragraphs of text to display. The code uses React Hooks to store the value of the input field and the text that is generated. The handleSubmit function is used to prevent the form from submitting and to set the amount of text to be displayed. It also checks for errors if the user enters a number greater than 8, and sets the error state to true if an error is found.

## App.js

- `count`: is a state value that determines the number of paragraphs. 
- `text`: is a state value of type array that holds teh lorem data.
- `handleSubmit`: grabs the value form input. then checks if the input is in the range of the data array. 
- `isError`: is a boolean that tracks if the count is > 8 and toggles and error.
- `setText` returns the text sliced at the input value from `handleSubmit`.
- `setCount(e.target.value)`: changes the state value of `count` to send to `handleSubmit`.