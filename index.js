/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Routes from './src/routes/Routes';
import { initializeFirebaseApi } from './src/services/FirebaseApi';

class Index extends Component {
    render() {
       return (<Login email='myemail@email.com' />);
    }
}

const wrappedRoutes = () => {
    return (
        <Routes />
    );
};

AppRegistry.registerComponent(appName, () => {
    initializeFirebaseApi();
    return wrappedRoutes;
});
// AppRegistry.registerComponent(appName, () => wrappedRoutes);
// AppRegistry.registerComponent(appName, () => Register);
// AppRegistry.registerComponent(appName, () => Index);
// AppRegistry.registerComponent(appName, () => Login);

// AppRegistry.registerComponent(appName, () => App);
