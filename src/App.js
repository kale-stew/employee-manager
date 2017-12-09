import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello World!
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App;