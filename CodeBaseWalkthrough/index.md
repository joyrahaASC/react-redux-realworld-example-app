# Tutorial: test1

This is a **React-based blogging platform** called *Conduit* that allows users to create, read, and interact with articles. 
The application uses **Redux for state management** to keep track of user authentication, articles, comments, and UI state in a centralized store. 
Users can *sign up, log in, write articles, follow other users, and favorite posts* through a clean, component-based interface that communicates with a backend API.


**Source Repository:** [https://github.com/joyrahaASC/react-redux-realworld-example-app/tree/test1](https://github.com/joyrahaASC/react-redux-realworld-example-app/tree/test1)

```mermaid
flowchart TD
    A0["API Agent Layer
"]
    A1["Redux State Management
"]
    A2["Component Architecture
"]
    A2 -- "Makes requests through" --> A0
    A2 -- "Connects to" --> A1
    A1 -- "Dispatches actions to" --> A0
```

## Chapters

1. [Component Architecture
](01_component_architecture_.md)
2. [Redux State Management
](02_redux_state_management_.md)
3. [API Agent Layer
](03_api_agent_layer_.md)
