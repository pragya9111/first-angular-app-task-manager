# First Angular App - Task Manager

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure

The project has the following structure:

```
.editorconfig
.gitignore
angular.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
.vscode/
public/
src/
  index.html
  main.ts
  styles.css
  app/
    app.component.css
    app.component.html
    app.component.ts
    dummy-users.ts
    header/
    tasks/
    ui/
    user/
assets/
```

## Features and Concepts

### Components

- **AppComponent**: The main component of the application. It imports and uses `HeaderComponent`, `UserComponent`, and `TasksComponent`.
- **HeaderComponent**: Displays the header of the application.
- **UserComponent**: Displays user information and allows selecting a user.
- **TasksComponent**: Displays tasks for the selected user and allows adding new tasks.
- **NewTaskComponent**: A dialog for adding new tasks.
- **TaskComponent**: Displays individual task information and allows completing tasks.
- **CardComponent**: A reusable card component used throughout the application.

### Services

- **TaskServices**: Manages tasks, including adding, removing, and retrieving tasks. Uses `localStorage` to persist tasks.

### Models

- **User**: Represents a user with `id`, `avatar`, and `name`.
- **Task**: Represents a task with `id`, `userId`, `title`, `summary`, and `dueDate`.
- **NewTaskData**: Represents the data required to create a new task with `title`, `summary`, and `date`.

### Angular Concepts

- **Dependency Injection**: Used to inject services into components and other services.
- **Reactive Forms**: Used for handling form inputs and validations.
- **Routing**: Used for navigating between different views in the application.
- **Local Storage**: Used to persist data in the browser's local storage.

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.