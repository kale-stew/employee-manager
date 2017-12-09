import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDsRRxqFtVuUPr1uSzB6tG09jzF10FxqLs",
            authDomain: "manager-f2552.firebaseapp.com",
            databaseURL: "https://manager-f2552.firebaseio.com",
            projectId: "manager-f2552",
            storageBucket: "manager-f2552.appspot.com",
            messagingSenderId: "130479421528"
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