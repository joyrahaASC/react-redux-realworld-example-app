# Repository Metadata Knowledge Base

## `src/reducers`
| File Path | Core Purpose |
|-----------|--------------|
| `src/reducers/article.js` | Implements a Redux reducer that manages article page state including article details and comments. Handles loading/unloading article pages, adding new comments with error handling, and deleting comments by filtering the comments array. |
| `src/reducers/articleList.js` | Redux reducer that manages article list state for home and profile pages. Handles article favoriting/unfavoriting, pagination, tag filtering, and tab switching by updating articles array and metadata based on dispatched action types. |
| `src/reducers/auth.js` | Manages authentication state for login and registration flows in a Redux reducer. Handles action types for login/register operations, page lifecycle events, async operation tracking, and dynamic field updates for authentication forms. |
| `src/reducers/common.js` | Redux reducer managing global application state for the Conduit app, including authentication tokens, current user data, navigation redirects, and view change tracking. Handles state transitions for user authentication flows (login, register, logout), article operations (submit, delete), settings updates, and page navigation lifecycle events. |
| `src/reducers/editor.js` | Manages the editor state in a Redux reducer for article creation and editing. Handles loading article data, updating form fields, managing tags, and tracking submission progress and errors. |
| `src/reducers/home.js` | Implements a Redux reducer that manages home page state by handling HOME_PAGE_LOADED and HOME_PAGE_UNLOADED actions. Stores tags data from the payload when the home page loads and resets state to an empty object when the page unloads. |
| `src/reducers/profile.js` | Manages the profile state in a Redux reducer by handling profile page lifecycle events and user follow/unfollow actions. Updates the profile state based on dispatched actions including loading profile data, clearing state on page unload, and updating profile information after follow/unfollow operations. |
| `src/reducers/settings.js` | Manages the settings page state in a Redux reducer, handling settings save operations, page unload cleanup, and async operation progress tracking. Responds to three action types to update state with error handling and loading indicators. |

