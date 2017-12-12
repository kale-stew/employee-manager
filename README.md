# Employee Manager

## User Stories
- As a user, I can add log into the app and add employees to my charge
- As a user, I can click on employees on my list and edit their information
- As a user, I can remove employees from my list
- As a user, I can text employees about their scheduled shift
- As a user, I can create new employees and new shifts
- As a user, when I log back in my list of employees is the same as I left it

## Tech Stack
- `redux` for login
- `redux-thunk`
- `react-native` app
- `firebase` for auth
- `firebase` for db
- `lodash` to access db info

## Final Product

![]()

## Features
- custom styled modals 
- interactive features: "text schedule"
- secure db to store employee information

## Notes 
- we are using redux to persist state of authentication
- states we will track: email, password, loading, error
- what's the difference between sync and async?
    - synchronous: run the action, returns something immediately
    - asynchronous: run the action, wait for something to happen, return data once that thing happens

### built following along Stephen Grider's React Native/Redux Udemy Course