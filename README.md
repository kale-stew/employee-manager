# Employee Manager

## What does this app do?
- A manager can add employees to their roster 
- A manager can log into the app
- Create a schedule for the employees 
- Text employees a schedule 
- "Fire" employees = remove them from the list 
    - "Are you sure you want to fire this employee?"

## Tech Stack
- `redux` for login
- `redux-thunk`
- `react-native` app
- `firebase` for auth
- `____` for db

## Features
- custom styled modals 
- interactive features: "text schedule"
- secure db to store employee information

## Notes 
- we are using redux to persist state of authentication
- states we will track: email, password, loading, error
- what's the difference between sync and async?
    - synchornous: run the action, returns something immediately
    - asynchronous: run the action, wait for something to happen, return data once that thing happens

### built following along Stephen Grider's React Native/Redux Udemy Course