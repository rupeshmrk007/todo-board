# Todo App

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory:**

   ```bash
   cd <project-directory>
   ```

3. **Open the project in VS Code:**

   ```bash
   code .
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```

5. **Run the development server:**

   ```bash
   npm run serve
   ```

## Features

- Add new todos with a title and status (Completed/Incompleted)
- Edit todo status via a dropdown menu
- Dispatch actions to Vuex for state management
- Responsive and user-friendly UI

## Project Structure

- **components/**: Vue components including forms and todo lists
- **store/**: Vuex store for managing todo state
- **assets/**: Styles, images, and other static assets

## Vuex Actions

- `addTodo`: Adds a new todo
- `updateTodo`: Updates the completion status of a todo
- `deleteTodo`: Removes a todo from the list

## API Integration

Ensure your API supports the following endpoints:

- **GET /todos**: Fetch all todos
- **POST /todos**: Add a new todo
- **PUT /todos/:id**: Update a todo
- **DELETE /todos/:id**: Delete a todo

## Design Decisions & Patterns

- **Component-Based Architecture**: Follows Vue's single-file component pattern for modularity.
- **State Management**: Utilizes Vuex to centralize and manage the application's state.
- **Optimized Event Handling**: Uses event delegation and trimmed inputs to reduce unnecessary re-renders.
- **Responsive Design**: Ensures the app works seamlessly across devices using flexible layouts and CSS.
