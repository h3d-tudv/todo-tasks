/**
 * Created by tudv on 5/24/2017.
 */

import React, {Component} from 'react'
import {
    View, Text, TouchableHighlight,
} from 'react-native'
import {
    StackNavigator
} from 'react-navigation'
import {
    Provider
} from 'react-redux'

import {
    Scene, NavBar, Router
} from 'react-native-router-flux'

import {createStore} from 'redux'
import mainReducer from './reducers/reducers'

import {
    Container, Header, Body, Content, Left, Right, Button, Icon, Title, Drawer, Fab,Input,
} from 'native-base'

import DetailView from './components/view/DetailView'
import MainView from './components/view/MainView'

let store = createStore(mainReducer)

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="mainView" component={MainView} initial="true" hideNavBar="false"/>
                        <Scene key="detailView" title="sdsd" component={DetailView} hideNavBar="true"/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}