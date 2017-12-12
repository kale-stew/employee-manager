import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Config from 'react-native-config';
import reducers from './reducers';
import Router from './router';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: Config.API_KEY,
            authDomain: Config.AUTH_DOMAIN,
            databaseURL: Config.DB_URL,
            projectId: Config.PROJECT_ID,
            storageBucket: Config.STORAGE_BUCKET,
            messagingSenderId: Config.MESSAGE_SENDER_ID
        };
        firebase.initializeApp(config);
    }

    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;