 
# Login Component with User Context

This project contains a Login component implemented in React, along with a User Context Provider for managing user authentication state.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Login component allows users to enter their username and password. It utilizes the React Context API to manage user state across the application. The UserContextProvider wraps the component tree to provide user state management. This implementation is useful for building user authentication flows in React applications.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. **User Context Provider**: Wrap your application or the specific component tree that requires user context with `UserContextProvider` to manage user state.

   ```javascript
   import React from 'react';
   import { UserContextProvider } from './Context/UserContext';
   import Login from './components/Login';

   function App() {
     return (
       <UserContextProvider>
         <Login />
       </UserContextProvider>
     );
   }

   export default App;
   ```

2. **Login Component**: The `Login` component captures user input and calls `setUser` to update the user state in the context.

   ```javascript
   import React from 'react';
   import Login from './components/Login';

   function App() {
     return (
       <div>
         <Login />
       </div>
     );
   }

   export default App;
   ```

### Login Component

The `Login` component includes the following features:
- Input fields for username and password.
- A submit button that triggers the user state update when clicked.

### User Context

The `UserContext` is created using the React Context API and allows you to manage user authentication state across your application. It provides the current user and a method to update the user.

## Contributing

If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
 #   C o n t e x t - A p i - M i n i - P r o j e c t 
 
 
