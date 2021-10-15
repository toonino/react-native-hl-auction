import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LOGIN, REGISTER, FORGET_PASS, DRAWER_NAVIGATOR, AUTH_NAVIGATOR, CODE_CF, SET_PASS, COMPLETE_PASS} from './routeNames';
import Register_01 from '../components/Register/Register_01';

import  Login  from '../components/Login/Login';
import FindPass from '../components/ForgetPass/FindPass';
// import DrawerNavigator from './DrawerNavigator';
import CodeCF from '../components/ForgetPass/CodeCF';
import SetPass from '../components/ForgetPass/SetPass';
import CompletePass from '../components/ForgetPass/CompletePass';
const AuthStack = createStackNavigator();
export default class AuthNavigator extends Component {
    render() {
        return (
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
                <AuthStack.Screen name={LOGIN} component={Login}/>
                <AuthStack.Screen name={FORGET_PASS} component={FindPass}/>
                <AuthStack.Screen name={CODE_CF} component={CodeCF}/>
                <AuthStack.Screen name={SET_PASS} component={SetPass}/>
                <AuthStack.Screen name={COMPLETE_PASS} component={CompletePass}/>
                <AuthStack.Screen name={REGISTER} component={Register_01}/>
                {/* <AuthStack.Screen name={DRAWER_NAVIGATOR} component={DrawerNavigator}/> */}
            </AuthStack.Navigator>
        )
    }
}
