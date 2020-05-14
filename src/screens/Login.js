import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, Image, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { singInOnFirebaseAsync } from '../services/FirebaseApi';
import {StackActions, NavigationActions} from 'react-navigation';

const img = require('../assets/TodoList.png');

export default class Login extends Component {

    state = {
        email: this.props.email,
        password: ''
    };

    static navigationOptions = {
        header: null
    };
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <View style={styles.topView}>
                        <Image style={styles.img} source={img}/>
                    </View>

                    <View style={styles.bottomView}>
                        <TextInput style={styles.input} 
                            placeholder='Email'
                            keyboardType={'email-address'}
                            autoCapitalize='none'
                            value={this.state.email}
                            onChangeText={ email => this.setState({ email }) } />
                        <TextInput style={styles.input} 
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={ password => this.setState({ password }) } />
                        <Button title='Sign In' onPress={() => this._singInAsync()} />
                        <View style={styles.textConteiner}>
                            <Text>Not a member? Let's </Text>
                            <Text style={styles.textRegister} onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('pageRegister');
                            }}>Register</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }

    async _singInAsync() {
        try {
            if (!this.state.email) {
                throw new Error ("Preencha o email ;)");
            }
            if (!this.state.password) {
                throw new Error ("Preencha a sua senha ;)");
            }
            const user = await singInOnFirebaseAsync(this.state.email, this.state.password);
            const resetNavigation = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName:
                'pageTasksList' })]
            });
            this.props.navigation.dispatch(resetNavigation);
            
        } catch (error) {
            Alert.alert("Atenção!", error.message);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    img: {
        width: 200,
        height: 200
    },
    bottomView: {
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20,
    },
    input: {
        marginBottom: 20,
    },
    textConteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister: {
        fontWeight: 'bold'
    }
});