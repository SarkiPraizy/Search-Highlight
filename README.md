# Real-Time Search with Highlighting

This React application provides a real-time search interface that highlights matching text in a list of items as the user types.

## Features

- Real-time filtering of a list based on user input.
- Case-insensitive search.
- Highlighting of the matching parts of the text.

## Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory:

   ```bash
   cd real-time-search
   ```

3. Use the Testing branch for all testing purposes


    ```bash
    git checkout Testing
    ```

4. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to see the application in action.

## Project Link

https://search-highlight.vercel.app/

## Code Overview

- The main code is in `src/App.js`.
- The styling is in `src/App.css`.

### `src/App.js`

- Manages the state of the search query using the `useState` hook.
- Filters and highlights items based on the query.
- Updates the displayed list in real-time as the user types.

### `src/App.css`

- Contains styles for the app, including the highlight class for matched text.

## Sample Item List

The application searches and highlights within the following sample items:

```javascript
const items = [
  "JavaScript programming",
  "HTML and CSS basics",
  "Frontend development",
  "Web design principles",
  "Dynamic content handling",
];
```
